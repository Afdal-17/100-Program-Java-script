document.getElementById("kalimat").addEventListener("input", function() {
    document.getElementById("jumlah").innerText = "Jumlah karakter:" + this.value.length;
});