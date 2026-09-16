function convertTemperature() {
    const input = document.getElementById("temperature");
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    const temperature = parseFloat(input.value);

    // Check empty or invalid input
    if (isNaN(temperature)) {
        result.innerHTML = "<p>Please enter a valid temperature.</p>";
        return;
    }

    // Check absolute zero
    if (unit === "Celsius" && temperature < -273.15) {
        result.innerHTML = "<p>Temperature cannot be below absolute zero.</p>";
        return;
    }

    if (unit === "Fahrenheit" && temperature < -459.67) {
        result.innerHTML = "<p>Temperature cannot be below absolute zero.</p>";
        return;
    }

    if (unit === "Kelvin" && temperature < 0) {
        result.innerHTML = "<p>Temperature cannot be below absolute zero.</p>";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert input to Celsius first
    if (unit === "Celsius") {
        celsius = temperature;
    } else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Convert Celsius to all units
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

    result.innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}
