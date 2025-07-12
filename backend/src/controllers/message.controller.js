import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
export const getUsersForSideBar = async (req, res) => {
    // Controller logic to get users for the sidebar
    try {
        constloggeedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne :loggedInUserId}}).select("-password") // Assuming user ID is stored in req.user
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSideBar controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


export const getMessages = async (req, res) => {
    try {
        const{id:userToChatId}=req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or :[
                {
                    senderId : senderId,recieverId : userToChatId,
                    
                }
                ,{
                    senderId : userToChatId,recieverId : senderId,
                }
            ]
        })
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}


export const sendMessage = async (req, res) => {
    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        })

        await newMessage.save();

        // realtime functionallity using socket.io
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}