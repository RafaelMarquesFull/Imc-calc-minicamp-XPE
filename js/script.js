function start() {
  var buttonCalculate = document.querySelector('#button-calculate-imc');
  buttonCalculate.addEventListener('click', buttonClick);

  var inputW = document.querySelector('#input-weight');
  var inputH = document.querySelector('#input-height');

  inputH.addEventListener('click', buttonClick);
  inputW.addEventListener('click', buttonClick);

  handleButtonClick();
}
function calculaImc(weigth, heigth) {
  return weigth / (heigth * heigth);
}
function buttonClick() {
  var inputW = document.querySelector('#input-weight');
  var inputH = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputW.value);
  var height = Number(inputH.value);

  var imc = calculaImc(weight, height);

  var formattdImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattdImc;
}
start();
