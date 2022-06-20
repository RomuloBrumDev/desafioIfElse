//*1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18*//

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior e tem acesso");
} else {
  console.log("Volte com seu responsável");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let idade1 = 18;
let espécie = "humano";

if (idade1 >= 18 && espécie === "humano") {
  console.log("Bem-vindo Humano Maior de Idade");
} else {
  console.log("Atenção!! Estamos sendo atacados!");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mesAniversario = "abril";

if (mesAniversario === "dezembro" || "janeiro") {
  console.log(
    "Olá aniversariante! Seja muito bem-vinde, aproveite os benefícios."
  );
} else {
  mesAniversario != "dezembro" || "janeiro";
  console.log("Seja bem vinde, obrigado pela preferência.");
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "Rômulo";

if (nome[0] === "R") {
  console.log(
    "A sala onde será realizada sua prova está localizada no piso térreo"
  );
} else {
  console.log("Procure um fiscal para verificar sua sala.");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Brum";

if (sobrenome.lengh > [6] || nome[0] === "E") {
  console.log("Essa é sua sala de aula");
} else {
  console.log("Sua turma ainda não está formada");
}
