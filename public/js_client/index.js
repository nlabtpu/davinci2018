var props = {
  "id":"",
	"command":[],
  "hitEvent":[{roll:90}]
};

window.onload = () => {
  var go = document.getElementById('go');
  go.addEventListener('click',() => {
    props.command.push({go:10});
    document.getElementById('messageList').textContent = JSON.stringify(props);

  });
  var roll = document.getElementById('roll');
  roll.addEventListener('click',() => {
    props.command.push({roll:90});
    document.getElementById('messageList').textContent = JSON.stringify(props);

  });
  var name = document.getElementById('message');
  var inputname = document.getElementById('inputname');
  inputname.addEventListener('click',() => {
    props.id = name.value;   //nameを決定させる。
    document.getElementById('messageList').textContent = JSON.stringify(props);

  });
  var reset = document.getElementById('reset');
  reset.addEventListener('click',()=>{
    name.value = '';
    props.id = "";
    props.command = [];
    document.getElementById('messageList').textContent = JSON.stringify(props);

  })
  var send = document.getElementById('send');
  send.addEventListener('click',()=>{
    if(props.command === 0) return fales;
    document.getElementById('messageList').textContent = JSON.stringify(props);

    socket.emit('message', JSON.stringify(props));
  });
};
