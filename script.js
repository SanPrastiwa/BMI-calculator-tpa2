function checkNumber(num) {
  return num == 0 ? false : true;
}

function checkBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  if (checkNumber(weight) && checkNumber(height)) {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    console.log(bmi);
    let status;
    if (bmi >= 30) {
      status = "Obesity";
    } else if (bmi > 25 && bmi < 29.9) {
      status = "Overweight";
    } else if (bmi > 18.5 && bmi < 24.9) {
      status = "Normal Weight";
    } else {
      status = "Underweight";
    }
    document.getElementById("hasil").innerHTML =
      "Your BMI is <b>" +
      bmi +
      "</b> which means You are <b>" +
      status +
      "</b>";
  }
}
