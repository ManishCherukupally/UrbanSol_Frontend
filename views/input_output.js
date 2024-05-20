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


    const obj2 = {
        screen: 'screen1',
    }


    const abcd = 1234
    let url = `ws://192.168.29.144:8765?screen=screen1`

    const socket = new WebSocket(url)

    socket.onopen = (event) => {
        console.log("websocket established", event);

        // socket.send(JSON.stringify(obj2));

    }
    socket.onmessage = (event) => {
        const res = JSON.parse(event.data)
        console.log(res)

        mainFunction(res)
        // console.log('Message from server:', event);
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
    function OutputData(data) {
        let mmf_data = document.getElementById('mmf_status')
        let mmfstatusbtn = document.getElementById('mmfbt')
        if (data.MMF === true) {
            mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }
        else if (data.MMF === 1) {
            mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }
        else if (data.MMF === 'on') {
            mmf_data.textContent = 'ON'
            mmfstatusbtn.style.background = "green"
        }


        else if (data.MMF === 'off') {
            mmf_data.textContent = 'OFF'
            mmfstatusbtn.style.background = "#d10000"
        }
        else if (data.MMF === false) {
            mmf_data.textContent = 'OFF'
            mmfstatusbtn.style.background = "#d10000"
        }
        else if (data.MMF === 0) {
            mmf_data.textContent = 'OFF'
            mmfstatusbtn.style.background = "#d10000"
        }



        let mmr_data = document.getElementById('mmr_status')
        let mmrstatusbtn = document.getElementById('mmrbt')
        if (data.MMR === true) {
            mmr_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }
        else if (data.MMR === 1) {
            mmr_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }
        else if (data.MMR === 'on') {
            mmr_data.textContent = 'ON'
            mmrstatusbtn.style.background = "green"
        }


        else if (data.MMR === 'off') {
            mmr_data.textContent = 'OFF'
            mmrstatusbtn.style.background = "#d10000"
        }
        else if (data.MMR === false) {
            mmr_data.textContent = 'OFF'
            mmrstatusbtn.style.background = "#d10000"
        }
        else if (data.MMR === 0) {
            mmr_data.textContent = 'OFF'
            mmrstatusbtn.style.background = "#d10000"
        }


        let blower_data = document.getElementById('bm_status')
        let blowerstatusbtn = document.getElementById('blowerbt')
        if (data.Blower_Motor === true) {
            blower_data.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }
        else if (data.Blower_Motor === 1) {
            blower_data.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }
        else if (data.Blower_Motor === 'on') {
            blower_data.textContent = 'ON'
            blowerstatusbtn.style.background = "green"
        }

        else if (data.Blower_Motor === 'off') {
            blower_data.textContent = 'OFF'
            blowerstatusbtn.style.background = "#d10000"
        }
        else if (data.Blower_Motor === false) {
            blower_data.textContent = 'OFF'
            blowerstatusbtn.style.background = "#d10000"
        }
        else if (data.Blower_Motor === 0) {
            blower_data.textContent = 'OFF'
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
    }

    function InputData(data) {
        let mmt_data = document.getElementById('mmtStatus')
        let mmtstatusbtn = document.getElementById('mmtstatusbtn')
        if (data.MMtrip === true) {
            mmt_data.textContent = 'ON'
            mmtstatusbtn.style.background = "green"
        }
        else if (data.MMtrip === 1) {
            mmt_data.textContent = 'ON'
            mmtstatusbtn.style.background = "green"
        }
        else if (data.MMtrip === 'on') {
            mmt_data.textContent = 'ON'
            mmtstatusbtn.style.background = "green"
        }


        else if (data.MMtrip === 'off') {
            mmt_data.textContent = 'OFF'
            mmtstatusbtn.style.background = "#d10000"
        }
        else if (data.MMtrip === false) {
            mmt_data.textContent = 'OFF'
            mmtstatusbtn.style.background = "#d10000"
        }
        else if (data.MMtrip === 0) {
            mmt_data.textContent = 'OFF'
            mmtstatusbtn.style.background = "#d10000"
        }

        let blowerTrip_data = document.getElementById('blowerTripStatus')
        let blowerTripbtn = document.getElementById('blowerTripstatusbtn')
        if (data.BMT === true) {
            blowerTrip_data.textContent = 'ON'
            blowerTripbtn.style.background = "green"
        }
        else if (data.BMT === 1) {
            blowerTrip_data.textContent = 'ON'
            blowerTripbtn.style.background = "green"
        }
        else if (data.BMT === 'on') {
            blowerTrip_data.textContent = 'ON'
            blowerTripbtn.style.background = "green"
        }


        else if (data.BMT === 'off') {
            blowerTrip_data.textContent = 'OFF'
            blowerTripbtn.style.background = "#d10000"
        }
        else if (data.BMT === false) {
            blowerTrip_data.textContent = 'OFF'
            blowerTripbtn.style.background = "#d10000"
        }
        else if (data.BMT === 0) {
            blowerTrip_data.textContent = 'OFF'
            blowerTripbtn.style.background = "#d10000"
        }

        let DorrOpen_data = document.getElementById('DoorOpenStatus')
        let DoorOpenbtn = document.getElementById('DoorOpenstatusbtn')
        if (data.DoorOpen === true) {
            DorrOpen_data.textContent = 'ON'
            DoorOpenbtn.style.background = "green"
        }
        else if (data.DoorOpen === 1) {
            DorrOpen_data.textContent = 'ON'
            DoorOpenbtn.style.background = "green"
        }
        else if (data.DoorOpen === 'on') {
            DorrOpen_data.textContent = 'ON'
            DoorOpenbtn.style.background = "green"
        }


        else if (data.DoorOpen === 'off') {
            DorrOpen_data.textContent = 'OFF'
            DoorOpenbtn.style.background = "#d10000"
        }
        else if (data.DoorOpen === false) {
            DorrOpen_data.textContent = 'OFF'
            DoorOpenbtn.style.background = "#d10000"
        }
        else if (data.DoorOpen === 0) {
            DorrOpen_data.textContent = 'OFF'
            DoorOpenbtn.style.background = "#d10000"
        }

        let spp_data = document.getElementById('SppStatus')
        let sppBtn = document.getElementById('Sppstatusbtn')
        if (data.SppOk === true) {
            spp_data.textContent = 'ON'
            sppBtn.style.background = "green"
        }
        else if (data.SppOk === 1) {
            spp_data.textContent = 'ON'
            sppBtn.style.background = "green"
        }
        else if (data.SppOk === 'on') {
            spp_data.textContent = 'ON'
            sppBtn.style.background = "green"
        }


        else if (data.SppOk === 'off') {
            spp_data.textContent = 'OFF'
            sppBtn.style.background = "#d10000"
        }
        else if (data.SppOk === false) {
            spp_data.textContent = 'OFF'
            sppBtn.style.background = "#d10000"
        }
        else if (data.SppOk === 0) {
            spp_data.textContent = 'OFF'
            sppBtn.style.background = "#d10000"
        }

        let eswitch_data = document.getElementById('EswitchStatus')
        let EswitchBtn = document.getElementById('Eswitchstatusbtn')
        if (data.Eswitch === true) {
            eswitch_data.textContent = 'ON'
            EswitchBtn.style.background = "green"
        }
        else if (data.Eswitch === 1) {
            eswitch_data.textContent = 'ON'
            EswitchBtn.style.background = "green"
        }
        else if (data.Eswitch === 'on') {
            eswitch_data.textContent = 'ON'
            EswitchBtn.style.background = "green"
        }


        else if (data.Eswitch === 'off') {
            eswitch_data.textContent = 'OFF'
            EswitchBtn.style.background = "#d10000"
        }
        else if (data.Eswitch === false) {
            eswitch_data.textContent = 'OFF'
            EswitchBtn.style.background = "#d10000"
        }
        else if (data.Eswitch === 0) {
            eswitch_data.textContent = 'OFF'
            EswitchBtn.style.background = "#d10000"
        }
    }

    OutputData(data)
    InputData(data)
}