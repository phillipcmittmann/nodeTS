import { Client } from 'pg';
import * as dotenv from "dotenv";

dotenv.config();

export const db = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});