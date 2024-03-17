function convertTemperature() {
  var temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  var unitSelector = document.getElementById("unitSelector");
  var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
  var resultElement = document.getElementById("result");
  var convertedTemperature;

  if (isNaN(temperatureInput)) {
    resultElement.textContent = "Coloque um número válido!";
    return;
  }

  if (selectedUnit === "celsius") {
    convertedTemperature = (temperatureInput * 9) / 5 + 32;
    resultElement.textContent =
      temperatureInput +
      " Celsius é " +
      convertedTemperature.toFixed(2) +
      " Fahrenheit.";
  } else {
    convertedTemperature = ((temperatureInput - 32) * 5) / 9;
    resultElement.textContent =
      temperatureInput +
      " Fahrenheit é " +
      convertedTemperature.toFixed(2) +
      " Celsius.";
  }
}
