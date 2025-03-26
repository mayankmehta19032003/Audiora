import express from "express";
import { client } from "../stream-client.js"; 
const router = express.Router();

router.post("/createUser", async (req, res) => {
    const { username, name, image } = req.body;

    if (!username || !name || !image) {
        return res.status(400).json({ message: "Required fields were empty" });
    }

    const newUser = {
        id: username,
        role: "user",
        name,
        image,
    };

    
    //   const user =  await client.upsertUsers({ 
    //     users: { 
    //         [newUser.id]: newUser }
    //      });
    // await client.upsertUsers({
    //     [newUser.id]: newUser  // Remove 'users' key
    //   });
    await client.upsertUsers([newUser]); 
      

        const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
        const token = client.createToken(username,expiry);

        return res.status(200).json({ token, username, name });
   
});

export default router;
