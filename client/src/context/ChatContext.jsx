import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext.jsx";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenMessages, setUnseenMessages] = useState([]);

    // function to get all user to sidebar
    const getUser = async () => {
        try {
            const { data } = await axios.get("/api/messages/users");

            if (data.success) {
                setUsers(data.user);
                setUnseenMessages(data.unseenMessage);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // function to get messages for selected user
    const getMessages = async (userId) => {
        try {
            const { data } = await axios.get(`/api/messages/${userId}`);
            if (data.success) {
                setMessages(data.messages);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // function to send message to selected user
    const sendMessage = async (messageData) => {
        try {
            const { data } = await axios.post(
                `/api/messages/send/${selectedUser._id}`,
                messageData
            );
            if (data.success) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    data.newMessage,
                ]);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // function to subscribe to messages for selected user
    const subscribeToMessages = async () => {
        if (!socket) return;

        socket.on("newMessage", (newMessage) => {
            if (selectedUser && newMessage.senderId === selectedUser._id) {
                newMessage.seen = true;
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                axios.put(`/api/messages/mark/${newMessage._id}`);
            } else {
                setUnseenMessages((prevUnseenMessages) => ({ ...prevUnseenMessages, [newMessage.senderId]: prevUnseenMessages[newMessage.senderId] ? prevUnseenMessages[newMessage.senderId] + 1 : 1 }))
            }
        });
    };

    // function to unsubscribe from messages
    const unsubscribeFrommessages = () => {
        if (socket) {
            socket.off("newMessage")
        }
    }

    useEffect(() => {
        subscribeToMessages();
        return () => unsubscribeFrommessages();
    }, [socket, selectedUser])
    useEffect(() => {
        console.log("ChatContext users updated:", users);
    }, [users]);

    const value = {
        messages, users, selectedUser, getUser, getMessages, sendMessage, setSelectedUser, unseenMessages, setUnseenMessages
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
