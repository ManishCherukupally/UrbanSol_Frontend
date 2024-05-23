
function websocket() {
    // const machine_id = 1;
    const obj = [{
        name: 'manish',
        age: 25
    },
    {
        name: 'manish',
        age: 25
    }]


    // const obj2 = {
    //    
    //     // Main_Motor_F: '',
    //     // Main_Motor_R: '',
    //     // Blower: '',
    //     // Heater: '',
    //     // Acr: ''
    // }


    const abcd = 1234
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        console.log("websocket established", event);

        // socket.send(JSON.stringify(obj2));

    }
    socket.onmessage = (event) => {
        const res = JSON.parse(event.data)
        console.log(res)

        mainFunction(res)
    }
    socket.onclose = () => {

        console.log('websocket connection closed');
        // setTimeout(websocket, reconnectDelay);

    }
    socket.onerror = (error) => {
        console.log("websocket connection error", error)
    }


}
websocket()

const mainFunction = (data) => {
    function ManualData(data) {
        // let mmf_data = document.getElementById('mmf_status')
        let mmfstatusbtn = document.getElementById('forward_btn')
        if (data.MMF === 'on') {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }
        else if (data.MMF === true) {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }
        else if (data.MMF === 1) {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }


        else if (data.MMF === 'off') {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "#d10000"
        }
        else if (data.MMF === false) {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "#d10000"
        }

        else if (data.MMF === 0) {
            // mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "#d10000"
        }

        let mmrstatusbtn = document.getElementById('reverse_btn')
        if (data.MMR === 'on') {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }
        else if (data.MMR === true) {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }
        else if (data.MMR === 1) {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }


        else if (data.MMR === 'off') {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "d10000"
        }
        else if (data.MMR === false) {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "d10000"
        }

        else if (data.MMR === 0) {
            // MMR_data.textContent = 'ON'
            mmrstatusbtn.style.background = "d10000"
        }


        let blowerStatus = document.getElementById('blowerstatus')
        let blowerstatusbtn = document.getElementById('blower_btn')

        if (data.Blower_Motor === true) {
            blowerStatus.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }
        else if (data.Blower_Motor === 1) {
            blowerStatus.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }
        else if (data.Blower_Motor === 'on') {
            blowerStatus.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }

        else if (data.Blower_Motor === 'off') {
            blowerStatus.textContent = 'OFF'
            blowerstatusbtn.style.background = "#d10000"
        }
        else if (data.Blower_Motor === false) {
            blowerStatus.textContent = 'OFF'
            blowerstatusbtn.style.background = "#d10000"
        }
        else if (data.Blower_Motor === 0) {
            blowerStatus.textContent = 'OFF'
            blowerstatusbtn.style.background = "#d10000"
        }


        let heater_data = document.getElementById('heater_status')
        let heaterstatusbtn = document.getElementById('heaterbt')
        if (data.Heater === true) {
            heater_data.textContent = 'ON'
            heaterstatusbtn.style.background = "green"
        }
        else if (data.Heater === 1) {
            heater_data.textContent = 'ON'
            heaterstatusbtn.style.background = "green"
        }
        else if (data.Heater === 'on') {
            heater_data.textContent = 'ON'
            heaterstatusbtn.style.background = "green"
        }


        else if (data.Heater === 'off') {
            heater_data.textContent = 'OFF'
            heaterstatusbtn.style.background = "#d10000"
        }
        else if (data.Heater === false) {
            heater_data.textContent = 'OFF'
            heaterstatusbtn.style.background = "#d10000"
        }
        else if (data.Heater === 0) {
            heater_data.textContent = 'OFF'
            heaterstatusbtn.style.background = "#d10000"
        }


        let acr_data = document.getElementById('acrSwitchStatus')
        let acrstatusbtn = document.getElementById('acrSwitchbtn')
        if (data.Acr === true) {
            acr_data.textContent = 'ON'
            acrstatusbtn.style.background = "green"
        }
        else if (data.Acr === 1) {
            acr_data.textContent = 'ON'
            acrstatusbtn.style.background = "green"
        }
        else if (data.Acr === 'on') {
            acr_data.textContent = 'ON'
            acrstatusbtn.style.background = "green"
        }


        else if (data.Acr === 'off') {
            acr_data.textContent = 'OFF'
            acrstatusbtn.style.background = "#d10000"
        }
        else if (data.Acr === false) {
            acr_data.textContent = 'OFF'
            acrstatusbtn.style.background = "#d10000"
        }
        else if (data.Acr === 0) {
            acr_data.textContent = 'OFF'
            acrstatusbtn.style.background = "#d10000"
        }
    }
    ManualData(data)
}

function ForwardsendMessage() {

    let statusColor = document.getElementById('forward_btn')
    let status = statusColor.style.background === "green" ? 'false' : 'true'
    console.log(status)
    const messageObj = {

        MMF: status
    }
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        // console.log(event)
        console.log("websocket established", event);

        socket.send(JSON.stringify(messageObj));
    }

    // socket.onmessage = (event) => {
    //     const res = JSON.parse(event.data)
    //     status = res.MMF
    //     console.log(status)
    // }

}

function ReversesendMessage() {
    let statusColor = document.getElementById('reverse_btn')
    let status = statusColor.style.background === "green" ? 'false' : 'true'
    console.log(status)
    const messageObj = {

        MMR: status
    }
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        // console.log("websocket established", event);

        socket.send(JSON.stringify(messageObj));

    }

}

function BlowersendMessage() {
    let statusColor = document.getElementById('blower_btn')
    let status = statusColor.style.background === "green" ? 'false' : 'true'
    console.log(status)
    const messageObj = {

        Blower_Motor: status
    }
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        // console.log("websocket established", event);

        socket.send(JSON.stringify(messageObj));

    }

}

function HeatersendMessage() {
    let statusColor = document.getElementById('heaterbt')
    let status = statusColor.style.background === "green" ? 'false' : 'true'
    console.log(status)
    const messageObj = {

        Heater: status
    }
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        // console.log("websocket established", event);

        socket.send(JSON.stringify(messageObj));

    }

}

function ACRsendMessage() {
    let statusColor = document.getElementById('acrSwitchbtn')
    let status = statusColor.style.background === "green" ? 'false' : 'true'
    console.log(status)
    const messageObj = {

        Acr: status
    }
    let url = `ws://192.168.29.144:8765?screen=screen2`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        // console.log("websocket established", event);

        socket.send(JSON.stringify(messageObj));

    }

}

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
    window.location.href = '/';
});


