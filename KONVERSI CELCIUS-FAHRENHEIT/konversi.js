function konversi() {
    let c = parseFloat(document.getElementById("celcius").value);
    let f = (c*9/5) + 32;
    document.getElementById("hasil").innerText = f + "F"
}