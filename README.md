# 📞 ChatApp - Real-Time Messaging Application

Welcome to **ChatApp**! 🚀 A real-time messaging application designed to connect people seamlessly, efficiently, and in style. With ChatApp, you can enjoy instant messaging, intuitive UI, and a great social connection experience.

---

## 🌟 Features

- 🗨️ **Real-Time Messaging**: Chat instantly with your friends and community.
- 🎨 **Intuitive UI**: A modern, user-friendly interface built for simplicity.
- 📲 **Cross-Platform**: Works on mobile and desktop platforms.

---

## 🛠️ Technology Stack

This repository utilizes the following technologies:

- **Frontend**: React.js ⚛️
- **Backend**: Node.js 🌐
- **Database**: MongoDB 🍃
- **WebSockets**: For real-time communication 🔁

---

## 🚀 Quick Installation Guide

Follow these simplified steps to set up and run ChatApp locally.

### 1️⃣ Prerequisites

Make sure the following software is installed on your machine:

- [🐍 Node.js (v16+)](https://nodejs.org)
- [🍀 MongoDB](https://www.mongodb.com/docs/manual/installation/)
- 📦 npm (comes bundled with Node.js)

---

### 2️⃣ Clone the Repository

1. Open your terminal (Command Prompt, PowerShell, or any terminal tool).
2. Run the following commands:
   ```bash
   git clone https://github.com/Darshanbaldha/chatapp.git
   cd chatapp
   ```

---

### 3️⃣ Install Dependencies
Install the necessary packages:

```bash
npm install
```

---

### 4️⃣ Set Up Environment Variables

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
2. Add the following configuration:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/chatapp
   JWT_SECRET=your_secret_key
   ```

---

### 5️⃣ Start MongoDB

Ensure MongoDB is running locally:

1. Navigate to the MongoDB installation folder.
2. Start the MongoDB server:
   ```bash
   mongod
   ```

---

### 6️⃣ Run The Application

Start the client and server separately to run the application:

#### Start the Backend Server 🌐:
1. Navigate to the server folder.
    ```bash
   cd server
   ```
2. Install required dependencies for the server:
   ```bash
   npm install
   ```
3. Run the following command in server folder to start the API server:
   ```bash
   npm start
   ```

#### Start the Frontend Client 🔗:
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install required dependencies for the client:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm start
   ```
   
---

## 🎮 Usage Instructions

1. **Sign Up or Log In** 🔑:
   - Create a new account with your email and password, or log in if you already have an account.

2. **Start Chatting** 💌:
   - Use the search bar to find users to start chatting.

3. **Real-Time Updates** 🌟:
   - Messages will appear instantly as you chat.

---

## 🧑‍💻 Author

This project is developed and maintained by **[Darshan Baldha](https://github.com/Darshanbaldha)**.

---

Happy Chatting! 🎉