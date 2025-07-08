let circleOne = document.getElementById("circle-one");

let circleTwo = document.getElementById("circle-two");
console.log(circleOne, circleTwo);

circleOne.addEventListener("click", function () {
  if (circleOne.classList.contains("circle-normal-one")) {
    circleOne.classList.remove("circle-normal-one");
    circleOne.classList.add("circle-reverse-one");
  } else {
    circleOne.classList.remove("circle-reverse-one");
    circleOne.classList.add("circle-normal-one");
  }
});

circleTwo.addEventListener("click", function () {
  if (circleTwo.classList.contains("circle-normal-two")) {
    circleTwo.classList.remove("circle-normal-two");
    circleTwo.classList.add("circle-reverse-two");
  } else {
    circleTwo.classList.remove("circle-reverse-two");
    circleTwo.classList.add("circle-normal-two");
  }
});
/*function addition(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }

  return somme;
}
let tableau = [4, 5, 6, 7, 8];

let resultat = addition(tableau);
let moyenne = resultat / tableau.length;
console.log("Moyenne = " + moyenne);
console.log(resultat);

 function division(tableau) {
  let resultat = tableau[0];
  for (let i = 0; i < tableau.length; i++) {
    resultat /= tableau[i];
  }
  return resultat;
}
let tableau = [4, 5, 6, 7, 8];
let resultat = division(tableau);
let moyenne = resultat / tableau.length;
console.log("Moyenne = " + moyenne);
console.log(resultat);
/*
function soustraction(tableau) {
  let resultat = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    resultat -= tableau[i];
  }
  return resultat;
}

let tableau = [20, 3, 4, 2];
let resultat = soustraction(tableau);

let moyenne = resultat / tableau.length;
console.log("Moyenne = " + moyenne);

console.log(resultat); */

let persons = [
  {
    name: "Rakoto",
    lastname: "Rasoa",
    age: 23,
  },
  {
    name: "Rakool",
    lastname: "Bool",
    age: 34,
  },
  {
    name: "Bonome",
    lastname: "Kely",
    age: 28,
  },
  {
    name: "Bobain",
    lastname: "Boo",
    age: 60,
  },
  {
    name: "Fana",
    lastname: "Soa",
    age: 31,
  },
  {
    name: "Fita",
    lastname: "Koloina",
    age: 23,
  },
];

// Calculer la moyenne d'age des personnes
// Filtrer les personnes qui ont l'age de nombre pair
// Trier le tableau par "age" + "name"
// Filtrer le tableau avec les personnes qui ont "o" dans "name"

// Total d'age des personnes
let totalAge = 0;
for (let i = 0; i < persons.length; i++) {
  totalAge += persons[i].age;
}
let moyenneAge = totalAge / persons.length;
console.log("Moyenne d'age : ", moyenneAge);

//Filtrage
let personnesAgePair = persons.filter(function (person) {
  return person.age % 2 === 0;
});
console.log("Personnes avec un âge pair :", personnesAgePair);

// age et name
let personsTriesNom = persons.slice().sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log("Personnes triées par nom :", personsTriesNom);

let personsTriesAge = persons.slice().sort(function (a, b) {
  return a.age - b.age;
});

// filtrage
let personnesAvecO = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].name.toLowerCase().includes("o")) {
    personnesAvecO.push(persons[i]);
  }
}
console.log('Personnes avec "o" dans le nom :', personnesAvecO);
