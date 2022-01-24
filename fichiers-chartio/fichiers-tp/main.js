import http from 'http';
import RequestController from './controllers/requestController.js';
import IOController from './controllers/ioController.js';
import { Server as IOServer } from 'socket.io';

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);
// mise en place du serveur de socket.io
const io = new IOServer(server);
const ioController = new IOController(io);
io.on('connection', socket => ioController.registerSocket(socket)  );
                       // OU : ioController.registerSocket.bind(ioController);
server.listen(8081);
