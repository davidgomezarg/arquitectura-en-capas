//Aca hay un problema. Cada vez que se avanza en la paginacion, se vuelve a cargar el scrip y se crea un nuevo carrito.

const getCarrito = ()=>{

    const endpoint =`http://localhost:8080/api/sessions/current`;

    fetch(endpoint,{
        method:"GET"
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        // console.log("El usuario actual es",data.payload);
        // console.log("Estamos dentro de crear carrito: ",data.payload.cart)

        const botonesCard = document.getElementsByName("btn");

        for (let boton of botonesCard) {
            boton.addEventListener('click', (e)=> {
                agregarCarrito(data.payload.cart,e.target.id); })
        }
    })

}

const agregarCarrito=(cid,pid)=>{
    const endpoint =`http://localhost:8080/api/carts/${cid}/product/${pid}`;
    const data= {}

    fetch(endpoint,{
        method:"POST"
    }).then((resp)=>{console.log("Esta es la respuesta de addProduct: ",resp)})

}


getCarrito()

