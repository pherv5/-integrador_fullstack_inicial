const cant = document.getElementById('cantidad');
const btnCalcular= document.getElementById('btnCalcular');
const categoria= document.getElementById('categoria');
const totalAPagar= document.getElementById('TOTAL');
const precio =200;

function calcular(){
let descuento=0;

    switch (categoria.value) {
        case "estudiante":
          descuento = 0.8;
          break;
        case "trainee":
          descuento=0.5;
          break;
        case "junior":
          descuento=0.15;
          break;
        
      }


totalAPagar.innerHTML="Total a pagar: $" +Math.round((precio*cant.value*(1-descuento)));

}