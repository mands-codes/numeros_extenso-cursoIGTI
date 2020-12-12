var inputValue; 
var inputDescription
var inputRange;

window.addEventListener('load', start());

function start(){
   inputRange = document.querySelector('#inputRange');
   inputValue = document.querySelector('#inputValue');
   inputDescription = document.querySelector('#inputText');

   inputRange.addEventListener('input', handleRange);
}

function handleRange(event){
var rangeValue = event.target.value;

inputValue.value = rangeValue;
inputDescription.value = numberDetails(rangeValue);
}

function numberDetails(number){
    const size = number.toString().length;

    if(size === 1){
        return sizeOneDescription(number);
    }
    if (size === 2){
        return sizeTwoDescription(number);
    }
    if (size === 3){
        return sizeThreeDescription(number);
    }

    return "Número ainda não identificado";
}


function sizeOneDescription(number) {
    if (number === '0') return 'zero';
    if (number === '1') return 'um';
    if (number === '2') return 'dois';
    if (number === '3') return 'três';
    if (number === '4') return 'quatro';
    if (number === '5') return 'cinco';
    if (number === '6') return 'seis';
    if (number === '7') return 'sete';
    if (number === '8') return 'oito';
    if (number === '9') return 'nove';
  }
  //dezena
  function sizeTwoDescription(number) {
    if (number === '10') return 'dez';
    if (number === '11') return 'onze';
    if (number === '12') return 'doze';
    if (number === '13') return 'treze';
    if (number === '14') return 'quatorze';
    if (number === '15') return 'quinze';
    if (number === '16') return 'dezesseis';
    if (number === '17') return 'dezessete';
    if (number === '18') return 'dezoito';
    if (number === '19') return 'dezenove';
    if (number === '20') return 'vinte';
    if (number === '30') return 'trinta';
    if (number === '40') return 'quarenta';
    if (number === '50') return 'cinquenta';
    if (number === '60') return 'sessenta';
    if (number === '70') return 'setenta';
    if (number === '80') return 'oitenta';
    if (number === '90') return 'noventa';
  
    var firstCharacter = number[0];
    var secondCharacter = number[1];
  
    var prefix = '';
  
    if (firstCharacter === '2') prefix = 'vinte e ';
    if (firstCharacter === '3') prefix = 'trinta e ';
    if (firstCharacter === '4') prefix = 'quarenta e ';
    if (firstCharacter === '5') prefix = 'cinquenta e ';
    if (firstCharacter === '6') prefix = 'sessenta e ';
    if (firstCharacter === '7') prefix = 'setenta e ';
    if (firstCharacter === '8') prefix = 'oitenta e ';
    if (firstCharacter === '9') prefix = 'noventa e ';
  
    return prefix + sizeOneDescription(secondCharacter);
  }
 // centena 
  function sizeThreeDescription(number) {
    if (number === '100') return 'cem';
    if (number === '200') return 'duzentos';
    if (number === '300') return 'trezentos';
    if (number === '400') return 'quatrocentos';
    if (number === '500') return 'quinhentos';
    if (number === '600') return 'seiscentos';
    if (number === '700') return 'setecentos';
    if (number === '800') return 'oitocentos';
    if (number === '900') return 'novecentos';
  
    var firstCharacter = number[0];
    var prefix = '';
  
    if (firstCharacter === '1') prefix = 'cento e ';
    if (firstCharacter === '2') prefix = 'duzentos e ';
    if (firstCharacter === '3') prefix = 'trezentos e ';
    if (firstCharacter === '4') prefix = 'quatrocentos e ';
    if (firstCharacter === '5') prefix = 'quinhentos e ';
    if (firstCharacter === '6') prefix = 'seiscentos e ';
    if (firstCharacter === '7') prefix = 'setecentos e ';
    if (firstCharacter === '8') prefix = 'oitocentos e ';
    if (firstCharacter === '9') prefix = 'novecentos e ';
  
    var secondCharacter = number[1];
    var thirdCharacter = number[2];
    var secondAndThirdCharacters = number.substring(1);
  
    if (secondCharacter === '0') {
      return prefix + sizeOneDescription(thirdCharacter);
    }
  
    return prefix + sizeTwoDescription(secondAndThirdCharacters);
  }

  start();