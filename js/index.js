const cant = document.getElementById('cantidad');
const btnCalcular= document.getElementById('btnCalcular');
const categoria= document.getElementById('categoria');
const totalAPagar= document.getElementById('TOTAL');
const precio =200;

function calcular(){
let descuento=0;


if (categoria.value === "estudiante"){
    descuento=0.8;
}else if (categoria === "trainee"){
    descuento=0.5;
}else if (categoria === "junior")
    descuento=0.15;

    
totalAPagar.innerHTML=parseInt(precio*cant.value*(1-descuento))+1;

}