// * Web worker example

let w;
if(typeof w === 'undefined') {
    w = new Worker('example.js');
}

w.onmessage = function(event) {
    document.getElementById('header').innerHTML = event.data;
}

w.terminate();