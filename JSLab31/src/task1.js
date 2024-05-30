document.addEventListener('DOMContentLoaded', (event) => {
    function swapContent() {
        let blockX = document.querySelector('.block-x');
        let blockY = document.querySelector('.block-y');
        
        if (blockX && blockY) {
            let temp = blockX.innerHTML;
            blockX.innerHTML = blockY.innerHTML;
            blockY.innerHTML = temp;
            console.log("Content swapped successfully");
        } else {
            console.error("One or both blocks not found");
        }
    }

    let button = document.getElementById('swapButton');
    if (button) {
        button.addEventListener('click', swapContent);
        console.log("Event listener added to the button");
    } else {
        console.error("Button not found");
    }
})

document.getElementById('swapButton').addEventListener('click', swapContent);

function calculateCircleArea() {
    let radius = Math.random() * 10 + 1;
    let area = Math.PI * Math.pow(radius, 2);

    document.getElementById('radiusField').innerText = 'Радіус: ' + radius.toFixed(2) + ' см';
    document.getElementById('result').innerText = 'Площа кола: ' + area.toFixed(2) + ' см²';
}
function toggleForm() {
    let form = document.getElementById("form");
    form.style.display = (form.style.display === "grid") ? "none" : "grid";
}
function calculateMax() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);
    let num6 = parseFloat(document.getElementById("num6").value);
    let num7 = parseFloat(document.getElementById("num7").value);
    let num8 = parseFloat(document.getElementById("num8").value);
    let num9 = parseFloat(document.getElementById("num9").value);
    let num10 = parseFloat(document.getElementById("num10").value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5) &&
        !isNaN(num6) && !isNaN(num7) && !isNaN(num8) && !isNaN(num9) && !isNaN(num10)) {
        
        let max = Math.max(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
        
        alert("Максимальне число: " + max);

        let d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000)); 
        let expires = "expires="+ d.toUTCString();
        document.cookie = "maxNumber=" + max + ";" + expires + ";path=/";

        getCookie();

    } else {
        alert("Будь ласка, введіть всі числа.");
    }
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}