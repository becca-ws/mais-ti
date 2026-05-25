class Aluno{
    constructor(nome){
        this.nome = nome;
        this.matematica = [];
        this.portugues = [];
    }

    adicionaNota(nota, disciplina){
        if (disciplina == "matematica"){
            this.matematica.push(nota)
        }
        else if (disciplina == "portugues"){
            this.portugues.push(nota)
        }
    }

    media(array){
        let soma = 0;
        for (let nota of array){
            soma += nota;
        }
        return soma / array.length
    }

    calculaMedia(disciplina){
        if (disciplina == "matematica"){
            return this.media(this.matematica)
        }
        else if(disciplina == "portugues"){
            return this.media(this.portugues)
        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}

class Turma{

    constructor(nomeTurma){
        this.nomeTurma = nomeTurma;
        this.alunos = [];
    }

   
 
    criaRanking(disciplina){

        if (disciplina != "matematica" && disciplina != "portugues"){
         console.log("Disciplina não encontrada.")

         return

        }
        let medias = []
        
        for (let aluno of this.alunos){
            let mediaAluno = aluno.calculaMedia(disciplina)
            
            medias.push({
                nome:aluno.nome,
                media:mediaAluno
            })
        }
        for ( let i = 0; i < medias.length; i++){


            let maior = i;
            let temp


            for (let j = i + 1; j < medias.length; j ++){

                if (medias [j].media > medias [maior].media){

                    maior = j
            }
            temp = medias[i];
            medias[i] = medias[maior];
            medias[maior] = temp;
            }

        }

        return medias

     }

}


let a1 = new Aluno("camile");
a1.adicionaNota(8, "matematica");
a1.adicionaNota(9, "matematica");
a1.adicionaNota(5, "portugues");
a1.adicionaNota(7, "portugues");


let a2 = new Aluno("yuri");
a2.adicionaNota(10, "matematica");
a2.adicionaNota(7, "matematica");
a2.adicionaNota(6, "portugues");
a2.adicionaNota(3, "portugues");


let a3 = new Aluno("levi");
a3.adicionaNota(10, "matematica");
a3.adicionaNota(9, "matematica");
a3.adicionaNota(9, "portugues");
a3.adicionaNota(6, "portugues");


let t1 = new Turma("3 B");

t1.alunos.push(a1);
t1.alunos.push(a2);
t1.alunos.push(a3);


console.log (t1.criaRanking("matematica"))
