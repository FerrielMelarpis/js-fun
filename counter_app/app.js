const app = document.querySelector('#app');

const plusButton = document.querySelector('[data-button="plus"]');
const minusButton = document.querySelector('[data-button="minus"]');
const counterDisplay = document.querySelector('[data-display="count"]');

let count = counterDisplay.getAttribute('data-count') || 0;

tick();

plusButton.onclick = function () {
  count += 1;
  tick();
};

minusButton.onclick = function () {
  count -= 1;
  tick();
};

function tick() {
  console.log(count);
  counterDisplay.setAttribute('data-count', count);
  counterDisplay.innerHTML = count;
}
