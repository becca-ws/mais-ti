const prompt =require('prompt-sync')();

function verificarIdade(idade){
    if(idade>=60){
        console.log("idoso")
    }
    else if(idade>=18){
        console.log("maior de idade")
    }
    else{
        console.log("menor de idade")
    }
}
    let idade= Prompt("por favor, informe sua idade:")
verificarIdade(idade)
