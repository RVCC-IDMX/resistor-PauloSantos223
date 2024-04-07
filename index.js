import { getResistorOhms } from './resistor.js';

document.addEventListener("DOMContentLoaded", function () {
    // Function to update the demo resistor color bands
    function updateDemoResistorColor() {
        const colorBands = [];
        const colorSelectors = document.querySelectorAll('.bands');
        colorSelectors.forEach(selector => {
            const selectedColor = selector.querySelector('.selected').innerText.toLowerCase();
            colorBands.push(selectedColor);
        });

        // Calculate the resistance value based on the color bands
        const resistance = getResistorOhms(colorBands);
        document.querySelector('.answer').innerText = `Resistor value: ${resistance}`;
    }

    // Add event listeners to color band selectors
    const colorSelectors = document.querySelectorAll('.box');
    colorSelectors.forEach(selector => {
        selector.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.querySelectorAll('.box').forEach(box => {
                box.classList.remove('selected');
            });
            this.classList.add('selected');
            updateDemoResistorColor();
        });
    });

    // Initial update of the demo resistor color
    updateDemoResistorColor();
});
