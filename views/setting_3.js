const saveButton = document.getElementById("saveButton");

const cutOffButton = document.getElementById("cutOffButton");
const cutOffTime = document.getElementById("cutOffTime");
const cutOffTimeInput = document.getElementById("cutOffTimeInput");

cutOffButton.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    cutOffTime.style.display = cutOffTime.style.display === "none" ? "block" : "none";
    cutOffTimeInput.style.display = cutOffTimeInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    cutOffTimeInput.value = cutOffTime.textContent.trim();
});


saveButton.addEventListener("click", function () {
    this.style.backgroundColor = "#750000"; // Adjust the hex code for your desired light red color

    // Optional: Change back to original color after a delay (for visual feedback)
    setTimeout(() => {
        this.style.backgroundColor = "#d10000";
    }, 200);


    // Update paragraph text with the input value
    if (cutOffTimeInput.style.display !== "none") { // Check if input is visible
        // Update paragraph text with the input value
        cutOffTime.textContent = cutOffTimeInput.value.trim();
    }            // Toggle visibility back to defaults
    cutOffTime.style.display = "block";
    cutOffTimeInput.style.display = "none";
})

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
    window.location.href = 'setting2';
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
    window.location.href = '/';
});