document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('color-button');
    const colorList = document.getElementById('color-list');
    const colorSwatches = colorList.querySelectorAll('.color-swatch');

    button.addEventListener('click', function () {
        colorList.style.display = 'block';
    });

    colorSwatches.forEach((swatch) => {
        swatch.addEventListener('click', function () {
            const selectedColor = swatch.style.backgroundColor;
            button.style.backgroundColor = selectedColor;
            colorList.style.display = 'none';
        });
    });
});