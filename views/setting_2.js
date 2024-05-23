const saveButton = document.getElementById("saveButton");

const editButton = document.getElementById("editButton");
const blowerTime = document.getElementById("blowerTime");
const blowerTimeInput = document.getElementById("blowerTimeInput");

editButton.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    blowerTime.style.display = blowerTime.style.display === "none" ? "block" : "none";
    blowerTimeInput.style.display = blowerTimeInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    blowerTimeInput.value = blowerTime.textContent.trim();
});

const CompEdit = document.getElementById("CompEdit");
const compTime = document.getElementById("compTime");
const compInput = document.getElementById("compInput");

CompEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    compTime.style.display = compTime.style.display === "none" ? "block" : "none";
    compInput.style.display = compInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    compInput.value = compTime.textContent.trim();
});


const LowTempEdit = document.getElementById("LowTempEdit");
const Lowtemp = document.getElementById("Lowtemp");
const LowtempInput = document.getElementById("LowtempInput");

LowTempEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    Lowtemp.style.display = Lowtemp.style.display === "none" ? "block" : "none";
    LowtempInput.style.display = LowtempInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    LowtempInput.value = Lowtemp.textContent.trim();
});

const UpTempEdit = document.getElementById("UpTempEdit");
const UpTemp = document.getElementById("UpTemp");
const UpTempInput = document.getElementById("UpTempInput");

UpTempEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    UpTemp.style.display = UpTemp.style.display === "none" ? "block" : "none";
    UpTempInput.style.display = UpTempInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    UpTempInput.value = UpTemp.textContent.trim();
});

const CycleEdit = document.getElementById("CycleEdit");
const Cycle = document.getElementById("Cycle");
const CycleInput = document.getElementById("CycleInput");

CycleEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    Cycle.style.display = Cycle.style.display === "none" ? "block" : "none";
    CycleInput.style.display = CycleInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    CycleInput.value = Cycle.textContent.trim();
});




saveButton.addEventListener("click", function () {
    this.style.backgroundColor = "#750000"; // Adjust the hex code for your desired light red color

    // Optional: Change back to original color after a delay (for visual feedback)
    setTimeout(() => {
        this.style.backgroundColor = "#d10000";
    }, 200);


    // Update paragraph text with the input value
    if (blowerTimeInput.style.display !== "none") { // Check if input is visible
        // Update paragraph text with the input value
        blowerTime.textContent = blowerTimeInput.value.trim();
    }            // Toggle visibility back to defaults
    blowerTime.style.display = "block";
    blowerTimeInput.style.display = "none";


    if (compInput.style.display !== 'none') {
        compTime.textContent = compInput.value.trim();
    }
    // Toggle visibility back to defaults
    compTime.style.display = "block";
    compInput.style.display = "none";


    if (LowtempInput.style.display !== 'none') {
        Lowtemp.textContent = LowtempInput.value.trim();
    }
    // Toggle visibility back to defaults
    Lowtemp.style.display = "block";
    LowtempInput.style.display = "none";


    if (UpTempInput.style.display !== 'none') {
        UpTemp.textContent = UpTempInput.value.trim();
    }
    // Toggle visibility back to defaults
    UpTemp.style.display = "block";
    UpTempInput.style.display = "none";


    if (CycleInput.style.display !== 'none') {
        Cycle.textContent = CycleInput.value.trim();
    }
    // Toggle visibility back to defaults
    Cycle.style.display = "block";
    CycleInput.style.display = "none";



});


const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
    window.location.href = 'setting1';
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
    window.location.href = '/';
});

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function () {
    window.location.href = 'setting3';
});