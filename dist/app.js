"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jokeRoute_1 = require("./routes/jokeRoute");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
let app = (0, express_1.default)();
const primas = new client_1.PrismaClient();
//MIDDLE WARE
app.use('/joke', jokeRoute_1.Jokeroute);
app.get('/', (req, res) => {
    res.send("HOME PAGE!!!");
});
app.listen(process.env.PORT, () => {
    console.log(`Server Running at ${3000}`);
});
