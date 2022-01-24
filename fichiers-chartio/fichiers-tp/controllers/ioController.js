export default class IOController {
    constructor(io) {
      this.#io = io;
      this.#clients = new Map();
      setInterval( this.randomColor.bind(this) , 5000 );
      setInterval( this.randomNumber.bind(this) , 2000 );
    }
    registerSocket(socket) {
      console.log(`new connection with id ${socket.id}`);
      this.setupListeners(socket);
    }
    setupListeners(socket) {
      socket.on( 'greatings'  , user => this.greatings(socket, user.name) );
      socket.on( 'disconnect' , () => this.leave(socket) );
    }
    greatings(socket, userName) {
      console.log(`greatings received from ${userName} (id : ${socket.id})`);
      this.#clients.set(socket.id, userName);
      socket.emit('welcome');
      socket.broadcast.emit('new user', userName);
    }
    randomNumber() {
      const range = {min: 2, max: 8}, 
      d = range.max - range.min;
      var numSockets = this.#io.length;
      var number = Math.round(range.min + Math.random() * d);
      for (var i = 0; i < numSockets; i++) {
        this.#client[i].send(number.toString());
      }
      console.log(`new number : ${number}`);
      this.#io.emit('change number', number);
    }
    randomColor() {
      const color = `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`;
      console.log(`new chosen color : ${color}`);
      this.#io.emit('change color', color);
    }
    leave(socket) {
      const userName = 'unknown' || this.#clients.get(socket.id);
      console.log(`disconnection from ${socket.id} (user : ${userName})`);
    }
   
  }
  const randInt = max => Math.floor( Math.random() * max );