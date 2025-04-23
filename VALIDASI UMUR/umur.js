function cekUmur() {
    let umur= document.getElementById("umur").value;
    document.getElementById("hasil").innerText = umur >= 18 ? "Dewasa atuh":"Masih bocil"
}