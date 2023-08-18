let counter = 0;
  
const counterValue = document.getElementById('two');
const incrementBtn = document.getElementById('one');
const decrementBtn = document.getElementById('three');
const resetBtn = document.querySelector('#reset');
  
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
  

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
  

resetBtn.addEventListener('click', reset);
  
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}