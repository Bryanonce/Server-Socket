"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const enviroment_1 = require("./global/enviroment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//Configuración de body-parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Configuración de cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Configuración de rutas
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`El servidor está corriendo el puerto ${enviroment_1.SERVER_PORT}`);
});
