const prompt = require('prompt-sync')();

function valorMeio(V1,V2,V3) {
    let meio;

    if ((V1>=V2 && V1<=V3)||(V1<=V2 && V1>=V3)){
        meio = V1
    }
    else if ((V2>=V1 && V2<=V3)||(V2<=V1 && V2<=V3)){
        meio = V2
    }
    else  
        meio = V3
    
    return meio;
    
}

let V1= prompt("digite o primeiro valor:")
let V2 = prompt("agora, digite o segundo valor:")
let V3 = prompt("por fim, o terceiro valor:")
console.log( valorMeio(V1, V2, V3))
