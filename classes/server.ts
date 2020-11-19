import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';



export default class Server{
    public io: socketIO.Server;
    private httpServer: http.Server;
    public app: express.Application;
    public port:number;
    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }


    private escucharSockets(){
        console.log('Escuchando conexiones de sockets');
        this.io.on('connection',(client)=>{
            console.log('Cliente Conectado');
            //Socket Desconectar
            socket.desconectar(client);
            socket.mensaje(client,this.io);
        })
    }


    start(callback: Function){
        this.httpServer.listen(this.port,callback());
    }
}