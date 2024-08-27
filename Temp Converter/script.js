function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'celsius') {
        celsius = inputTemperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        fahrenheit = inputTemperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'kelvin') {
        kelvin = inputTemperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('outputCelsius').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('outputFahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('outputKelvin').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
 