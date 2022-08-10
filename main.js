let data = 0;


document.getElementById('counting').innerText= data; //allows value of data to display on browser


//function that allows data to increase by 1
let i = 1
function increment() {
    data = data + 1;
    document.getElementById('counting').innerText = data;
    document.getElementById("inc").value = ++i;
}

//function that allows data to decrease by 1

function decrement() {
    data = data - 1;
   
    document.getElementById('counting').innerText = data;
    document.getElementById("inc").value = --i;
}






