console.log("CZESC!");

let przycisk = document.querySelector(".przycisk");
let Omnie = document.querySelector(".Omnie");
przycisk.addEventListener("click", () => {
    Omnie.remove();
});
console.log(przycisk);