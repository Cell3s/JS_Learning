const output = document.querySelector(".output");
const button = document.querySelector(".btn");
const clearButton = document.querySelector(".clearBtn");
output.textContent = "";

function countDown (){
for (let i = 10; i>=0; i--){
    const para = document.createElement("p")
    let count = `${i} seconds until launch`;
    output.textContent += `${count}\n`;
    output.appendChild(para)
}
    output.textContent += '\nWe have life off!\n\n';
}



// function countDown (){
// let i = 10;

// while (i >= 0) {
//   const para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = "Blast off!";
//   } else {
//     para.textContent = i;
//   }
//   output.appendChild(para);

//   i--;

// }

// }


button.addEventListener("click", countDown);
clearButton.addEventListener("click", () => (output.textContent=""));

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);