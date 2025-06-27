import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

export const app=express();

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,
        optionsSuccessStatus: 200,
    }
))

app.use(express.json("limit:16kb"));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

