//Cargos que estan disponobles en el sistema(referencia fijos)
const cargos = [
    {id_cargo: 1, nom_cargo: `Provedor`},
    {id_cargo: 2, nom_cargo: `Cliente`},
    {id_cargo: 3, nom_cargo: `Tecnico`}
];

//Tipo de productos que hay
let tipPro = [
    {id_tipPro: 1, nom_tipPro: `Tecnologico`},
    {id_tipPro: 2, nom_tipPro: `Hogar`},
    {id_tipPro: 3, nom_tipPro: `Cuidado Personal`}
];

//Variables globales mutables 
let productos = [];
let proveedor = [];
let cliente = [];
let tecnico = [];

//Clave secreta para el servidor
const claveSecreta = `MiClave$1234`;

//CIFRADO:Convierte datos a texto cigrado en Base64
function CifrarDatos(data,clave) { //Creamos una funcion y le damos los parametros 
    const texto = JSON.stringify(data); //Convierte el objeto a string
    let encriptado = ``; //Cadena de texto vacía
    for (let i = 0; i < texto.length; i++) {
         encriptado += String.fromCharCode(texto.charCodeAt(i) ^ clave.charCodeAt(i % clave.length)); //Proceso de encriptado por cada caracter y agregar a cadena de texto   
    }
    return btoa(encriptado); //Codifica en Base64 para que sea texto válido
}

//Decifrado:Proceso inverso para recuperar los datos originales
function DecifrarDatos(dataEncriptado,clave){
    const cifrado=atob(); //Descodifica el Base64
    let descifrado = ``; //Cadena de texto vacia
    for (let i = 0; i < cifradp.length; i++) {
         descifrado += String.fromCharCode(cifrado.charCodeAt(i) ^ clave.charCodeAt(i % clave.length));  
    }
    try {
         return JSON.parse(descifrado); //Covierte el string de nuevo a objeto
    } catch {
        return null; //Si la clave es incorrecta,retorna null(dato corrupto)
    }
}