"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default());
app.get('/api/users/currentuser', (function (req, res) {
    res.send('Hi from auth');
}));
app.listen(3000, function () {
    console.log('Listening port 3000');
});
