class Aluno{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

class Materia{
    constructor(materia, alunos){
        this.materia = materia;
        this.alunos = alunos;
    }

    novoAluno(aluno){
        this.alunos.push(aluno);
    }

    aprovados(){
        return this.alunos.filter((item)=>{return item.nota >= 6})
    }

    mensagemAprovaods(){
        this.aprovados().forEach(aluno => {
            console.log(`${aluno.nome} passou na matéria de ${this.materia}`);
        });
    }
}

const materia1 = new Materia('Matemática', [new Aluno('Lucas', 8),new Aluno('Pedro',5),new Aluno('Maria', 6),new Aluno('Danilo', 3)]);

materia1.novoAluno(new Aluno('Camilly', 10));
console.log(materia1);
console.log(materia1.aprovados());
materia1.mensagemAprovaods();