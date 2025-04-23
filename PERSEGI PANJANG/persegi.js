function luas() {
    let p = parseFloat(document.getElementById("panjang").value);
    let l = parseFloat(document.getElementById("lebar").value);
    document.getElementById("Luas").innerText = "Luas Persegi:" + (p*l);
}