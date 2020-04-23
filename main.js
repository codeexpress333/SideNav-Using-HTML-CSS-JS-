//Get All Class
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const lists = document.querySelector(".lists");

// Event Listener
menu.addEventListener("click", () => {
    lists.classList.toggle("show");
});


// Event Listener Again For Cross
cross.addEventListener("click", () => {
    lists.classList.remove("show");
});


// You can Use Also with function 
// menu.addEventListener("click", function() {
//     lists.classList.toggle("show");
// });