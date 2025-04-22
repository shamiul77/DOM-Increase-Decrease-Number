const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let finalCounter = 0;

counter.innerText = finalCounter;
decrease.setAttribute('disabled', true);

increase.addEventListener('click', () => {
    finalCounter += 1;
    counter.innerText = finalCounter;
    if (finalCounter > 0) {
        decrease.removeAttribute('disabled');
    }
});

decrease.addEventListener('click', () => {
    if (finalCounter > 0) {
        finalCounter -= 1;
        counter.innerText = finalCounter;
    }
    if (finalCounter === 0) {
        decrease.setAttribute('disabled', true);
    }
});
