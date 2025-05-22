function validasi() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const pesan = document.getElementById("pesan");

  if (!email.includes("@") || pass.length < 6) {
    pesan.textContent = "Email tidak valid atau password terlalu pendek!";
    return false;
  }

  pesan.textContent = "Form valid!";
  return true;
}
