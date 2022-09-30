/* modal popup */
const modal = document.getElementById("modal");

setTimeout(() => {
    modal.style.display = "block";
}, 3500);


/* modal close btn */
const closeModalButton = document.getElementById("close-modal-btn");

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});