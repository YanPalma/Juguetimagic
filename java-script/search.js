const productos = [
    {nombre: 'Lego', Valor: 250},
    {nombre: 'Mattel', Valor: 250},
    {nombre: 'Barbie', Valor: 250},
    {nombre: 'Batman', Valor: 250},
    {nombre: 'Little Mommy', Valor: 250},
    {nombre: 'DC', Valor: 250},
]

const formulario = document.querySelector ('formulario');
const boton = document.querySelector ('boton');
const resultado = document.querySelector ('resultado')

const filtrar = () => {
   // console.log (formulario.value);
   resultado.innerHTML = '';

   const texto = formulario.ariaValueMax.toLocaleLowerCase ();
   
   for (let producto of productos) {
    let nombre = producto.nombre.toLocaleLowerCase ();
    if (nombre.indexOf (texto) !== -1){
        resultado.innerHTML +- `
        <li> ${producto.nombre} -valor: ${producto.valor} </li>
        `
    }
   }

   if (resultado.innerHTML === ''){
       resultado.innerHTML +- `
        <li> Producto no encontrado... </li>
        `
   }
}

boton.addEventListener ('click', filtrar)