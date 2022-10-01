/* modal popup */
const modal = document.getElementById("modal");

setTimeout(() => {
    modal.style.display = "inline";
}, 3500);


/* modal close btn */
const closeModalButton = document.getElementById("close-modal-btn");

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});


/* form submit */
const consentForm = document.getElementById("consent-form");

consentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
});