function volume() {
    const phi = 1/3
    let l = parseFloat(document.getElementById("la").value);
    let t = parseFloat(document.getElementById("tinggi").value);
    document.getElementById("volume").innerText = "Volume:" + (phi*l*t);

}