const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModalButton = document.getElementById("close-modal-btn");
const consentForm = document.getElementById("consent-form");


/* modal popup */
setTimeout(() => {
    modal.style.display = "inline";
}, 3500);


/* modal close btn */
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});


/* form submit */
consentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");

    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get("fullName");
    const email = consentFormData.get("email");
    console.log(fullName, email);

    modalText.innerHTML = 
    `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">
                Uploading your data to the dark-ish web...
            </p>
        </div>
    `

    setTimeout(() => {
        document.getElementById("upload-text").innerText = "Completing transaction...";
    }, 2500);

    setTimeout(() => {
        document.getElementById("modal-body").innerHTML =
            `
                <h2>Hey thanks <span class="modal-display-name">${fullName}!</span></h2>
                <p>We just sold the rights to your eternal soul :D</p>
                <div class="idiot-gif">
                    <img src="images/pirate.gif">
                </div>
            `
    }, 6000);
});