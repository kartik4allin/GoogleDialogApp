var socket = require('socket.io-client')('https://googledialogflowapp.herokuapp.com:40052');
socket.on('connect', function(){
  console.log('client is connected!!!!');
});
socket.on('event', function(data){
  console.log('event is connected!!!!');
});
socket.on('disconnect', function(){
  console.log('client is disconnected!!!!');
});
console.log('Socket Client!!!!');
