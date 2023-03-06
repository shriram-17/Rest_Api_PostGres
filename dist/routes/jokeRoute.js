"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jokeroute = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
exports.Jokeroute = (0, express_1.default)();
let Prisma = new client_1.PrismaClient();
exports.Jokeroute.get('/', (req, res) => {
    res.send("The Jokes Home Page");
});
exports.Jokeroute.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jokes = yield Prisma.joke.findMany({
        include: { creator: true }
    });
    res.status(200).json({ jokes });
}));
exports.Jokeroute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joke = yield Prisma.joke.create({
        data: {
            text: "fake Laughs :)",
            userId: "cleu12otq00007kg8ertid5en"
        }
    });
    res.status(200).json({ joke });
}));
