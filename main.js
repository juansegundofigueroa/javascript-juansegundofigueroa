let edad = Number(prompt("ingrese su edad"));
if(edad >= 18){
    alert("Sos mayor y podes ingresar en la web");
}else{
    alert("No eres mayor de edad por lo que no puedes entrar a la web");
}
let nombre = prompt("Como es tu nombre?");
alert(`Bienvenido ${nombre}`);
let numero = Number(prompt("Bienvenido al menu,las opciones son: 1:clasico 2:vegetariano 3:premium 4:seguir"));
while(numero != 4){
    switch (numero){
        case 1:
            alert("incluye: comida + bebida + postre");
            break;
        case 2:
            alert("incluye: comida vegetariana + bebida + postre vegano");
            break;
        case 3:
            alert("incluye: entrada + comida + bebida + postre");
            break;
        default:
            alert("opcion incorrecta");
            break;
    }
    numero = Number(prompt ("Bienvenido al menu,las opciones son: 1:clasico 2:vegetariano 3:premium 4:seguir"));
}
function datospersonales(apellido){
    alert(`Orden tomada para ${apellido}`);
}
let cliente = prompt(`Cual es tu apellido para tomar la orden:`);
datospersonales(cliente)
let pedido = Number(prompt("Que opcion queres? (opcion 4 para salir del menu)"));
while(pedido != 4){
    switch (pedido){
        case 1:
            alert("Elegiste la opcion Clasica,su precio es de $1000 + iva");
            const suma = (a, b) => a + b;
            const iva = (precioIva) => precioIva * 0.21;
            const opcion1 = 1000;
            let precioFinal = suma(opcion1, iva(opcion1));
            alert (`Precio final a abonar es ${precioFinal}`);
            datospersonales(cliente);
            break;
        case 2:
            alert("Elegiste la opcion Vegetariana,su precio es de $2000 + iva");
            let contador1 = Number(1);
            const suma2 = (a, b) => a + b;
            const iva2 = (precioIva) => precioIva * 0.21;
            const opcion2 = 2000;
            let precioFinal2 = suma2(opcion2, iva2(opcion2));
            alert (`Precio final a abonar es ${precioFinal2}`);
            datospersonales(cliente);
            break;
        case 3:
            alert("Elegiste la opcion Premium,su precio es de $3000 + iva");
            const suma3 = (a, b) => a + b;
            const iva3 = (precioIva) => precioIva * 0.21;
            const opcion3 = 3000;
            let precioFinal3 = suma3(opcion3, iva3(opcion3));
            alert (`Precio final a abonar es ${precioFinal3}`);
            datospersonales(cliente);
            break;
        default:
            alert("opcion incorrecta");
            break;
    }
    pedido = Number(prompt ("Queres hacer un nuevo pedido? (opcion 4 para salir del menu)"));
}
let cantidad = Number(prompt(`ingrese la cantidad deseada de menus:`));
while(cantidad != 0){
    if(cantidad == 7){
    alert(`tenes un descuento del 10%`);
    break;
}else if(cantidad <=6){
    alert(`Tu pedido tiene ${cantidad} menus`);
    break;
}else{
    alert(`Solo disponemos 7 menus semanales,indica un numero menor a 7`);
}
    cantidad = Number(prompt(`ingrese la cantidad deseada de menus:`));
}
alert (`Gracias por comprar con nosotros`);