// function websocket() {

//     let url = `ws://192.168.29.144:8765?screen=screen1`

//     const socket = new WebSocket(url)

//     socket.onopen = (event) => {
//         console.log("websocket established", event);

//         // socket.send(JSON.stringify(obj2));

//     }
//     socket.onmessage = (event) => {
//         const res = JSON.parse(event.data)
//         console.log(res)

//         mainFunction(res)
//         // console.log('Message from server:', event);
//     }
//     socket.onclose = () => {

//         console.log('websocket connection closed');
//         // setTimeout(websocket, reconnectDelay);

//     }
//     socket.onerror = (error) => {
//         console.log("websocket connection error", error)
//     }


// }
// websocket()



const saveButton = document.getElementById("saveButton");

const editButton = document.getElementById("editButton");
const tcTime = document.getElementById("tcTime");
const tcTimeInput = document.getElementById("tcTimeInput");

editButton.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    tcTime.style.display = tcTime.style.display === "none" ? "block" : "none";
    tcTimeInput.style.display = tcTimeInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    tcTimeInput.value = tcTime.textContent.trim();
});

const fwdeditButton = document.getElementById("fwdEdit");
const fwdTime = document.getElementById("fwdTime");
const fwdInput = document.getElementById("fwdInput");

fwdeditButton.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    fwdTime.style.display = fwdTime.style.display === "none" ? "block" : "none";
    fwdInput.style.display = fwdInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    fwdInput.value = fwdTime.textContent.trim();
});


const wait1Edit = document.getElementById("wait1Edit");
const wait1 = document.getElementById("wait1");
const wait1Input = document.getElementById("wait1Input");

wait1Edit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    wait1.style.display = wait1.style.display === "none" ? "block" : "none";
    wait1Input.style.display = wait1Input.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    wait1Input.value = wait1.textContent.trim();
});

const revEdit = document.getElementById("revEdit");
const revTime = document.getElementById("revTime");
const revInput = document.getElementById("revInput");

revEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    revTime.style.display = revTime.style.display === "none" ? "block" : "none";
    revInput.style.display = revInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    revInput.value = revTime.textContent.trim();
});

const wait2Edit = document.getElementById("wait2Edit");
const wait2 = document.getElementById("wait2");
const wait2Input = document.getElementById("wait2Input");

wait2Edit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    wait2.style.display = wait2.style.display === "none" ? "block" : "none";
    wait2Input.style.display = wait2Input.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    wait2Input.value = wait2.textContent.trim();
});

const waitCycleEdit = document.getElementById("waitCycleEdit");
const waitCycle = document.getElementById("waitCycle");
const waitCycleInput = document.getElementById("waitCycleInput");

waitCycleEdit.addEventListener("click", function () {
    saveButton.disabled = false;
    // Toggle visibility of paragraph and input field
    waitCycle.style.display = waitCycle.style.display === "none" ? "block" : "none";
    waitCycleInput.style.display = waitCycleInput.style.display === "none" ? "block" : "none";

    // Set the input value to the current paragraph text
    waitCycleInput.value = waitCycle.textContent.trim();
});


saveButton.addEventListener("click", function () {
    this.style.backgroundColor = "#750000"; // Adjust the hex code for your desired light red color

    // Optional: Change back to original color after a delay (for visual feedback)
    setTimeout(() => {
        this.style.backgroundColor = "#d10000";
    }, 200);


    // Update paragraph text with the input value
    if (tcTimeInput.style.display !== "none") { // Check if input is visible
        // Update paragraph text with the input value
        tcTime.textContent = tcTimeInput.value.trim();
    }            // Toggle visibility back to defaults
    tcTime.style.display = "block";
    tcTimeInput.style.display = "none";


    if (fwdInput.style.display !== 'none') {
        fwdTime.textContent = fwdInput.value.trim();
    }
    // Toggle visibility back to defaults
    fwdTime.style.display = "block";
    fwdInput.style.display = "none";


    if (wait1Input.style.display !== 'none') {
        wait1.textContent = wait1Input.value.trim();
    }
    // Toggle visibility back to defaults
    wait1.style.display = "block";
    wait1Input.style.display = "none";


    if (revInput.style.display !== 'none') {
        revTime.textContent = revInput.value.trim();
    }
    // Toggle visibility back to defaults
    revTime.style.display = "block";
    revInput.style.display = "none";


    if (wait2Input.style.display !== 'none') {
        wait2.textContent = wait2Input.value.trim();
    }
    // Toggle visibility back to defaults
    wait2.style.display = "block";
    wait2Input.style.display = "none";


    if (waitCycleInput.style.display !== 'none') {
        waitCycle.textContent = waitCycleInput.value.trim();
    }
    // Toggle visibility back to defaults
    waitCycle.style.display = "block";
    waitCycleInput.style.display = "none";


});

const s1nextbtn = document.getElementById("s1nextbtn");

s1nextbtn.addEventListener("click", function () {
    window.location.href = 'setting2';
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
    window.location.href = '/';
});