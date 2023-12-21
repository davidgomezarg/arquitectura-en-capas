//iniciarmos el socket

const socket = io();
let user;

Swal.fire({
    title: "Identificate con tu mail",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address",
    allowOutsideClick:false
  }).then(result=>{
    user=result.value;
    
  });

  console.log(user)

// socket.emit("message","Mensaje desde del front")