const calcular = document.getElementById('calculo')

function calcularImc(){

  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')
  
  if(nome !== ''  &&  altura !== '' &&  peso !== '' ){

    const imc = (peso /Math.pow(altura, 2)).toFixed(2)

    let classe = ''
    if ( imc  <= 18.5){
      classe = 'com peso  muito baixo. Procure orientação médica!'

   }  else if ( imc > 18.5 && imc <= 24.99){
     classe = 'com o peso normal. Continue assim!'

   } else if ( imc > 25 && imc <= 29.99){
     classe = 'com o peso acima do normal!'

   }  else if ( imc > 30 && imc <= 34.99){
     classe = '  com obesidade Grau I.'

   } else if ( imc > 35 && imc <= 39.99){
     classe = ' com obesidade Grau II.'

   } else { 
    classe = 'com obesidade Grau III. Procure orientação médica!'

   }
    resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classe}`

} else{
  resultado.textContent = 'Todos os campos deverão ser preenchidos.'

  }
}


calculo.addEventListener('click', calcularImc)