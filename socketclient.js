var socket = require('socket.io-client')();
socket.on('connect', function(){
  console.log('client is connected!!!!');
});
socket.on('event', function(data){
  console.log('event is connected!!!!');
});
socket.on('disconnect', function(){
  console.log('client is disconnected!!!!');
});

socket.on('connect_error', (error) => {
  console.log('connection error !!!!'+error);
});
console.log('Socket Client!!!!');
