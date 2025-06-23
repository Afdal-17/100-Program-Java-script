function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = weight / (height * height);
  let status = "";
  if (bmi < 18.5) status = "Kurus";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Gemuk";
  else status = "Obesitas";
  document.getElementById("result").innerText = `BMI Anda: ${bmi.toFixed(2)} (${status})`;
}
