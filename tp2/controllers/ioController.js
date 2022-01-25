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
  
    leave(socket) {
      const userName = 'unknown' || this.#clients.get(socket.id);
      console.log(`disconnection from ${socket.id} (user : ${userName})`);
    }
    randomNombre(){
      const range = {min: 2, max: 8}, 
      d = range.max - range.min;
      var nombre = Math.round(range.min + Math.random() * d);
      this.#io.emit('nombre choisi', nombre);
  
    }
    addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
  }
  }

