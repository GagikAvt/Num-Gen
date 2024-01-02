/**
 * @param {number} min 
 * @param {number} max
 * @returns {number}
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber() {
    const minInput = document.getElementById('minInput');
    const maxInput = document.getElementById('maxInput');
    const resultElement = document.getElementById('result');

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        resultElement.textContent = 'Введите корректные значения для диапазона.';
    } else if (min >= max) {
        resultElement.textContent = 'Минимальное значение должно быть меньше максимального.';
    } else {
        const randomNum = getRandomNumber(min, max);
        resultElement.textContent = `Сгенерированное число: ${randomNum}`;
    }
}