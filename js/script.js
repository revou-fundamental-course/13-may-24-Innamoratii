let areaProcess = "1/2 * "

/* LUAS SEGITIGA */
function calculate () {
    let base = document.getElementById("inputBase").value;
    let height = document.getElementById("inputHeight").value;

    //calculate the area of the triangle
    base = Number(base);
    height = Number(height);
    let areaofTriangle = 1/2 * base * height;
    document.getElementById("process").textContent = areaProcess + base + ' * ' + height + ' = ';
    document.getElementById("result").textContent = areaofTriangle;
}

function clearDisplay() {
    let clear = ' ';
    document.getElementById("myForm").reset();
    document.getElementById("result").textContent = clear;
    document.getElementById("process").textContent = clear;
}


/* KELILING SEGITIGA */