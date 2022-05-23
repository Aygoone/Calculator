//selector

const output = document.querySelector('.output');
const result = document.querySelector('.result');
const keys = document.querySelectorAll('button');

// eventListener

keys.forEach((key) => {
  key.addEventListener('click', calculate);
});

function calculate() {
  let buttonText = this.innerText;
  console.log(buttonText);
  //   AC
  if (buttonText === 'AC') {
    output.innerText = '';
    result.innerText = '';
    return;
  }
  // DEL
  if (buttonText === 'DEL') {
    output.textContent = output.textContent.substr(0, output.textContent.length - 1);
    return;
  }
  // Hasil
  if (buttonText === '=') {
    result.innerText = eval(output.innerText);
    result.style.animation = 'big 0.5s ease-in-out';
    output.style.animation = 'small 0.5s ease-in-out';
    result.style.animationFillMode = 'forwards';
    output.style.animationFillMode = 'forwards';
  } else {
    output.textContent += buttonText;
    return;
  }
}
