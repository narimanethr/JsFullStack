export default class IOController {
  #io;
  #clients;

  constructor(io) {
    this.#io = io;
    this.#clients = new Map();
    setInterval(this.randomNombre.bind(this),2000);
    
  }   
  registerSocket(socket) {
    console.log(`new connection with id ${socket.id}`);
    
    this.setupListeners(socket);
    socket.on( 'disconnect' , () => this.leave(socket) ); 
  }
  setupListeners(socket) {
    socket.on( 'greatings'  , user => this.greatings(socket, user.name) );
    console.log('nombre reçu');     
  }
  greatings(socket, userName) {
    this.#clients.set(socket.id, userName);
    //version 1
    //socket.broadcast.emit('new user', userName);
    //version 2
    socket.emit('new user', userName)
   
  } 
  leave(socket) {
    const userName = this.#clients.get(socket.id);
    console.log(`disconnection from ${socket.id} `);   
    this.#clients.delete(socket.id);
  }
  randomNombre(){
    const range = {min: 2, max: 8}, 
    d = range.max - range.min;
    var nombre = Math.round(range.min + Math.random() * d)
    console.log('nombre reçu');
    this.#io.emit('nombre choisi', nombre);
  }
}
