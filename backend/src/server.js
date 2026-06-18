import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";


console.log(process.env.MONGO_URI); // Log the MongoDB URI to verify it's being read correctly

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes" , notesRoutes);



app.listen(PORT, () => {
    console.log('Server is running....');
});