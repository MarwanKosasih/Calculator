let displayValue = ""; // Untuk menyimpan ekspresi yang sedang dimasukkan

// Fungsi menambahkan angka atau simbol ke display
function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

// Fungsi membersihkan layar
function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

// Fungsi mengganti tanda positif/negatif
function toggleSign() {
  if (displayValue.startsWith("-")) {
    displayValue = displayValue.slice(1); // Menghapus tanda negatif
  } else {
    displayValue = `-${displayValue}`; // Menambahkan tanda negatif
  }
  updateDisplay();
}

// Fungsi untuk operasi matematika
function operation(op) {
  switch (op) {
    case "sqrt": // Akar kuadrat
      displayValue = Math.sqrt(parseFloat(displayValue)).toString();
      break;
    case "pow": // Pangkat dua
      displayValue = Math.pow(parseFloat(displayValue), 2).toString();
      break;
    case "sin": // Sinus (dalam radian)
      displayValue = Math.sin(toRadians(parseFloat(displayValue))).toString();
      break;
    case "cos": // Cosinus (dalam radian)
      displayValue = Math.cos(toRadians(parseFloat(displayValue))).toString();
      break;
    default:
      displayValue += ` ${op} `;
      break;
  }
  updateDisplay();
}

// Fungsi untuk menghitung hasil
function calculate() {
  try {
    displayValue = eval(
      displayValue.replace("÷", "/").replace("×", "*")
    ).toString();
  } catch (error) {
    displayValue = "Error"; // Jika ada error dalam perhitungan
  }
  updateDisplay();
}

// Fungsi memperbarui tampilan layar kalkulator
function updateDisplay() {
  document.getElementById("display").textContent = displayValue || "0";
}

// Fungsi konversi dari derajat ke radian
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
