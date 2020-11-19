"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
exports.desconectar = (client) => {
    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.mensaje = (client, io) => {
    //Escuchar Mensajes tipo evento 'mensaje'
    client.on('mensaje', (payload) => {
        console.log('Mensaje recibido: ', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
