
function suma(){

    var a =0;
    var b =0;
    var suma = 0;
    

     a= parseInt(prompt("Ingrese un primer valor"));
     b= parseInt(prompt("Ingrese un segundo valor"));

      suma = a+b;

      alert("la suma es: " + suma)

}   

function OPERACIONES(){
  
    var a =0;
    var b =0;
    var suma = 0;
    var resta=0;
    var multiplicacion =0;
    var division=0;
    
    a= parseInt(prompt("Ingrese un primer valor"));
    b= parseInt(prompt("Ingrese un segundo valor"));


    suma = a+b;
    resta = a-b;
    division = a/b;
    multiplicacion = a*b;

    alert("la suma es: " + suma)
    alert("la resta es: " + resta)
    alert("la multiplicacion es: " + multiplicacion)
    alert("la division es: " + division)

}

function numeroMayor(){

    var n1 =0;
    var n2 =0;
    
    n1= parseInt(prompt("Ingrese un primer valor"));
    n2= parseInt(prompt("Ingrese un segundo valor"));


    if(n1==n2){

     alert("Los valores son iguales: ");

    }else if(n1>n2){
     
     alert("Ok n1:"+ n1 +" es mayor que: n2 :"+ n2 );

    }else{

        alert("Ok n2:"+ n2 +" es mayor que: n1 :"+ n1 );  
    }

}

function cuadrado(){

    var n1 =0;
    var elevado;
    
    
    n1= parseInt(prompt("Ingrese un valor: "));
    
    elevado = n1*n1;
    

    alert("El numero: "+n1+ "al cuadrado es:"+ elevado );
}

function triangulo(){

    var base =0;
    var altura=0;
    var area=0;
    
    
    base= parseInt(prompt("Ingrese un valor de la base: "));
    altura= parseInt(prompt("Ingrese un valor de la altura: "));
    
    area = base*altura/2;
    

    alert("El area del triangulo con base: "+base+ " y altura :"+ altura+ " es: "+ area );
}

function centiMetros(){

    var pulgadas =0;
    var centimetros=0;
    var metros=0;
    
       pulgadas= parseInt(prompt("Ingrese un valor en pulgadas: "));

         centimetros = pulgadas*2,54;
         metros=centimetros*100;
    

    alert("La cantidad de pulgadas: "+pulgadas+ " En centimetros es :"+ centimetros+ " y en metros es: "+ metros );
}
function descuento(){

    var kilos =0;
    var desc=0;
    var totalPagar=0;
    var total=0;
    
       kilos= parseInt(prompt("Ingrese la cantidad de kilos de manzana: "));
         if (kilos<=2 ){
             totalPagar = kilos*4500;
            alert("No aplica descuento : El total a pagar Es: "+ totalPagar );

         }else if((kilos>=3)&&(kilos<=6)){
                desc=(kilos*4500)*(10/100);
                totalPagar= (kilos*4500)-desc;
                total=kilos*4500;
            alert("Total De Compra: "+total+": Su descuento es del 10% : "+desc+" El total a pagar Es: "+ totalPagar );

         }else if((kilos>=6)&&(kilos<=10)){

            desc=(kilos*4500)*(15/100);
            totalPagar= (kilos*4500)-desc;
            total=kilos*4500;
             alert("Total De Compra: "+total+": Su descuento es del 15% : "+desc+" El total a pagar Es: "+ totalPagar );


         }else if((kilos>=10)){

            desc=(kilos*4500)*(20/100);
            totalPagar= (kilos*4500)-desc;
            total=kilos*4500;
             alert("Total De Compra: "+total+": Su descuento es del 20% : "+desc+" El total a pagar Es: "+ totalPagar );


         }
    
    
                

}