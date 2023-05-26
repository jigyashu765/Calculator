let display = document.getElementById('display');
let oprator = '';
let a = 0;
let b = 0;

function appendToDisplay(value) {
  display.value = display.value + value;
}

function Oprator(oprat) {
  oprator = oprat;
  a = parseFloat(display.value);
  display.value = '';
}

function calculate(){
  b = parseFloat(display.value);
  let sign;
  let result;
  switch (oprator) {
    case 'add':
      result = a + b;
      sign = '+'
    break;
    case 'sub':
      result = a - b;
      sign = '-'
    break;
    case 'mul':
      result = a * b;
      sign = 'x'
    break;
    case 'div':
      result = a / b;
      sign = '/'
    break;
    case 'mod':
      result = a % b;
      sign = '%'
    break;
    case 'power':
      result = Math.pow(a,b);
      sign = '%'
    break;
    default:
      result = 'Error'
    break;
  }
  // display.value = a + " " + sign + " " + b + " = " + result;
  display.value = result;
}

function Clear(){
  display.value = '';
  oprator = '';
  a = 0;
  b = 0;
}