import http from 'http';
import IOController from './controllers/ioController.js';
import RequestController from './controllers/requestController.js';
import { Server as ServerIO } from 'socket.io';
const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);
let connectionsLimit = 2;
const joueurId = { ONE : 1, TWO : 2};
const io = new ServerIO(server);
const ioController = new IOController(io);

io.on('connection', socket => {
	if (io.engine.clientsCount > connectionsLimit) {
		socket.emit('err', { message: 'reach the limit of connections' });
		socket.emit("disble_start");
		socket.emit("set_player_name", {name: "CONNECTION REFUSED :("});
		socket.disconnect();
		console.log('Disconnected...');
	} else {
		ioController.registerSocket(socket);
		console.log("connected");
		console.log(io.engine.clientsCount);
		if(io.engine.clientsCount == 1){
			socket.emit("set_player_id", {id: joueurId.ONE});
			socket.emit("set_player_name", {name: "PLAYER 1"});
			socket.emit("set_msg", {msg_txt: "Waiting for player 2..."});
		} else if (io.engine.clientsCount == 2) {
			socket.emit("set_player_id", {id: joueurId.TWO});
			socket.emit("set_player_name", {name: "PLAYER 2"});
			io.emit("start_game");
			io.emit("set_msg", {msg_txt: ""});
		}
	}
});

server.listen(8080);

