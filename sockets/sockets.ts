import { Socket } from 'socket.io';
export const desconectar = (client: Socket)=>{
    client.on('disconnect',()=>{
        console.log('Cliente Desconectado');
    })
}

export const mensaje = (client: Socket, io:SocketIO.Server)=>{
    //Escuchar Mensajes tipo evento 'mensaje'
    client.on('mensaje',(payload:{de:string,cuerpo:string})=>{
        console.log('Mensaje recibido: ', payload);
        io.emit('mensaje-nuevo',payload);
    });
    
}
