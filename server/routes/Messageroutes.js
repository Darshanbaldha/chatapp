import express from "express";
import { protectRoutes } from "../middleware/auth.js";
import {
    getMessages,
    getUserForSidebar,
    markMessageAsSeen,
    sendMessage,
} from "../controllers/messageController.js";

const messagerouter = express.Router();

messagerouter.get("/users", protectRoutes, getUserForSidebar);
messagerouter.get("/:id", protectRoutes, getMessages);
messagerouter.put("/mark/:id", protectRoutes, markMessageAsSeen);
messagerouter.post("/send/:id", protectRoutes, sendMessage);

export default messagerouter;
