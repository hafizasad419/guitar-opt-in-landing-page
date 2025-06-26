import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { CLIENT_URL } from "../config/index.js";
import { optInUser } from "./mailchimp.js";



const app = express();

// CORS configuration
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://192.168.1.107:5173",
        CLIENT_URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

// Other middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Test route
app.get("/", (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            message: "Hello World From Guitar App!",
            requestedUrl: req.url
        });
});


app.get("/opt-in", optInUser)


export default app;
