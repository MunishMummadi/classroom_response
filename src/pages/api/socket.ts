// src/pages/api/socket.ts
import { Server } from 'socket.io';

export default function socketHandler(req, res) {
    if (!res.socket.server.io) {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            socket.on('new-answer', (answer) => {
                io.emit('answer-updated', answer);
            });
        });
    }
    res.end();
}