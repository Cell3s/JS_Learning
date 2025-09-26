//Loops Through Collection, utilizes arrays 

const animals = ["Dog", "Cat", "Cow", "Frog"];

for (const animal of animals){
    console.log(animal);
}

function toUpper(string){
    return "hello " + string 
}

const upperAnimals = animals.map(toUpper);

console.log(upperAnimals);

const filtered = animals.filter((animal) => animal.startsWith("C"));
console.log(filtered);

//Standard Loops

const output = document.querySelector(".output");

function calculate() {
    for (let i=10; i >= 0; i--) {
        const para = document.createElement("p");
        const newResults = `${i} x ${i} = ${i * i}`;
        para.textContent += `${newResults}\n`;
        output.appendChild(para)
    }
    const para = document.createElement("p");
    para.textContent += "\nFinished!\n\n";
    output.appendChild(para)
}

const calculateBtn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clearBtn");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (output.textContent = ""));

//Arrays with standard loops

for (let i = 0; i<animals.length; i++){
    console.log(animals[i])
}

const people = ["Pete", "Jim", "Bob"];

let inviteList = "My favorite people are "

// for (const person of people){
//     inviteList += `${person}, `;
// }

// console.log(inviteList);

for (let i=0; i<people.length; i++) {
    if (i === people.length - 1){
        inviteList += `${people[i]}.`;
    } else {
        inviteList += `${people[i]}, `;
    }
}

console.log(inviteList);

//Loops Breaks

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const para2 = document.querySelector("p")
const input = document.querySelector("input")
const searchBtn = document.querySelector(".searchBtn")

searchBtn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = ""
    input.focus();
    para2.textContent = ""

    for (const contact of contacts){
        const splitContact = contact.split(":");

        if (splitContact[0].toLowerCase() === searchName){
            para2.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`;
            break;
        }
    }
    if (para2.textContent === ""){
        para2.textContent = "Contact not found.";
    }
});