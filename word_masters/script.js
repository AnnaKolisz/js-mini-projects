const inputs = document.querySelectorAll('.box');
const winword = ['l', 'o', 'l', 'e', 'k' ]


// document.querySelector(".tester-input")
// .addEventListener("keydown", function (event) {
// // uses the isLetter function from above
// if (!isLetter(event.key)) {
//   event.preventDefault();
// }
// });

inputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        console.log(event);
        console.log(index);
    })
})