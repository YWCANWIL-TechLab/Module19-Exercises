// * Web Worker Example

// let count = 0;

// function timedCount() {
//     count += 1;
//     postMessage(count);
//     setTimeout(timedCount(), 500);
// }

// timedCount();



// * Fetch example

fetch("assets/data.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    let output = "";
    for(let obj of data) {  // Loop through array of Objects
        output += `Object: ${obj.firstName} ${obj.lastName} `;
        for(let prop in obj) {  // Loop through the properties of the object
            output += `Prop ${prop}: ${obj[prop]} `;
        }
        output += "<br>";
    }
    document.getElementById('header').innerHTML = output;
})
.catch((error) => {
    console.log(`Encounterd the following error: ${error}`);
});



// * Geolocation example

// function findLocation() {

//     if(navigator.geolocation) {
//         // Geolocation is available
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     }
//     else {
//         // Geolocation is unavailable
//         console.log(`Geolocation is not available`);
//     }
// }

// function showPosition(position) {
    
//     document.getElementById('header').innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`;
// }

// function showError(error) {
//     const header = document.getElementById('header');
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             header.innerHTML = "User denied request for Geolocation";
//             break;
//         case error.POSITION_UNAVAILABLE:
//             header.innerHTML = "Location is unavailable";
//             break;
//         case error.TIMEOUT:
//     }
// }

// findLocation();