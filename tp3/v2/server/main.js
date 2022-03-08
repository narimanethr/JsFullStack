//import RequestController from './controllers/requestController.js';
import http from 'http';
var io = require('socket.io')(http);
const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);
app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
  });
io.on('connection', function(socket){
	console.log("connection done by ${socket.id}");
	console.log('a user connected');
  });

server.listen(8080);
