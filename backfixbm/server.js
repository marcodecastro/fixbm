import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
    
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log("MongoDB connection established successfully");
    }
    );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
    );

    