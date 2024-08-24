// script.js
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedTemp;
    let unit;

    // Conversion logic
    switch (unitSelect) {
        case 'C':
            convertedTemp = {
                F: (temperature * 9/5) + 32,
                K: temperature + 273.15
            };
            unit = 'Celsius';
            break;
        case 'F':
            convertedTemp = {
                C: (temperature - 32) * 5/9,
                K: (temperature - 32) * 5/9 + 273.15
            };
            unit = 'Fahrenheit';
            break;
        case 'K':
            convertedTemp = {
                C: temperature - 273.15,
                F: (temperature - 273.15) * 9/5 + 32
            };
            unit = 'Kelvin';
            break;
        default:
            resultDiv.textContent = 'Invalid unit selected.';
            return;
    }

    // Display results
    resultDiv.innerHTML = `
        <p>Converted from ${unit}:</p>
        <p>${convertedTemp.C ? convertedTemp.C.toFixed(2) + ' °C' : ''}</p>
        <p>${convertedTemp.F ? convertedTemp.F.toFixed(2) + ' °F' : ''}</p>
        <p>${convertedTemp.K ? convertedTemp.K.toFixed(2) + ' K' : ''}</p>
    `;
}
