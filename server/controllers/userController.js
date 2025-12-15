import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

// Signup controller
export const signup = async (req, res) => {
    const { fullname, password, email, bio } = req.body;

    try {
        if (!fullname || !password || !email || !bio) {
            return res.json({ sucess: false, message: "Missing Details" });
        } else {
            const user = await User.findOne({ email });
            if (user) {
                return res.json({
                    sucess: false,
                    message: "User already exists.",
                });
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = await User.create({
                    fullname,
                    email,
                    password: hashedPassword,
                    bio,
                });

                const token = generateToken(newUser._id);
                res.json({
                    success: true,
                    userData: newUser,
                    token,
                    message: "Account created. ",
                });
            }
        }
    } catch (error) {
        res.json({
            success: true,
            userData: newUser,
            token,
            message: error.message,
        });
        console.log(error.message);
    }
};

// Login controller
export const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const userData = await User.findOne({ email });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            userData.password
        );

        if (!isPasswordCorrect) {
            return res.json({
                success: false,
                message: "Invalid Credentials.",
            });
        }

        const token = generateToken(newUser._id);
        res.json({
            success: true,
            userData,
            token,
            message: "Login Successful.",
        });
    } catch (error) {
        res.json({
            success: true,
            userData: newUser,
            token,
            message: error.message,
        });
        console.log(error.message);
    }
};

// check authentic user controller
export const checkAuth = (req, res) => {
    res.json({ success: true, user: req.user });
};

// controller for update user profile
export const updateProfile = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;
        const userId = req.user._id;
        let updatedUser;

        if (!profilePic) {
            updatedUser = await User.findByIdAndUpdate(
                userId,
                { bio, fullName },
                { new: true }
            );
        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(
                userId,
                { profilePic: upload.secure_url, bio, fullName },
                { new: true }
            );
        }

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
