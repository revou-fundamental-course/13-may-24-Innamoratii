let input = document.querySelector("input");

/* LUAS SEGITIGA */
function calculateArea() {
    let base = document.getElementById("inputBase").value;
    let height = document.getElementById("inputHeight").value;
    let finalAnswer = document.getElementById("hasil");
    let areaProcess = "1/2 * ";
    
    base = Number(base);
    height = Number(height);
    let areaofTriangle = 1/2 * base * height;
    document.addEventListener("click", () => {
        //check jika kosong
        if (document.getElementById("inputBase").value.length == 0 || document.getElementById("inputHeight").value.length == 0 ) {
            finalAnswer.textContent = "Mohon untuk memasukkan nilai tersebut!";
        } else {
            document.getElementById("hasil").textContent = areaProcess + base + ' * ' + height + ' = ' + areaofTriangle;
        }
    })
    

}
 
/* KELILING SEGITIGA */
function calculateKeliling () {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let c = document.getElementById("inputC").value;
    let finalAnswer = document.getElementById("hasil2");

    a = Number(a);
    b = Number(b);
    c = Number(c);

    let keliling = a + b + c;
    document.addEventListener("click", () => {
        //check jika kosong
        if (document.getElementById("inputA").value.length == 0 || document.getElementById("inputB").value.length == 0 || document.getElementById("inputC").value.length == 0) {
            finalAnswer.textContent = "Mohon untuk memasukkan nilai tersebut!";
        } else {
            document.getElementById("hasil2").textContent = a + ' + ' + b + ' + ' + c + ' = ' + keliling  ;
        }
    })
}

//membersihkan text perhitungan
function clearDisplay() {
    document.addEventListener("click", function() {
        document.getElementById("hasil").textContent = ' ';
        document.getElementById("hasil2").textContent = ' ';
    })
}