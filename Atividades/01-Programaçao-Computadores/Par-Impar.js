const prompt =require('prompt-sync')()

function ParImpar(numero){
if(numero%2==0){


    console.log("par")
}
else{
    console.log("ímpar")  
}
}

let num= prompt ("por favor,informe seu numero:")
ParImpar(num)
