const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(arr, titulo) {
    const displayResultado = document.getElementById('displayResultado');
    
    displayResultado.innerHTML = ""

    const tituloKata = document.createElement('h2');
    tituloKata.innerHTML = titulo;

    const paragrafoResultado = document.createElement('p');
    paragrafoResultado.innerHTML = arr.join(' ,');

    displayResultado.appendChild(tituloKata);
    displayResultado.appendChild(paragrafoResultado);

}

function kata1() {
    // implemente o código do kata 1 aqui
    /*
    1.  Exibir os números de 1 a 25: _(1, 2, 3, …, 24, 25)_
     */
const output = [];
    for (let contador = 1; contador <= 25; contador++) {
       output.push(contador);
    }
    showResults(output, 'kata 1');
}
const buttonkata1 = document.getElementById('kata1');
buttonkata1.addEventListener('click', kata1);



function kata2() {
    // implemente o código do kata 2 aqui
    //2.  Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
    const output = [];
    for (let contador = 25; contador >= 1; contador--){
       output.push(contador);
    }
    showResults(output, 'kata 2');
}
const buttonkata2 = document.getElementById('kata2');
buttonkata2.addEventListener('click', kata2);

function kata3() {
    // implemente o código do kata 3 aqui
    // Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
    const output = [];
    for (let contador = -1;contador >=-25 ;contador--){
      
        output.push(contador);
        
    }
    showResults(output, 'kata 3');
}
const buttonkata3 = document.getElementById('kata3');
buttonkata3.addEventListener('click', kata3);

function kata4() {
    // implemente o código do kata 4 aqui
    //Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
        const output = [];
    for (let contador = -25; contador <= -1; contador++){
        
        output.push(contador);
        
    }
    showResults(output, 'kata 4');
}
const buttonkata4 = document.getElementById('kata4');
buttonkata4.addEventListener('click', kata4);


function kata5() {
    // implemente o código do kata 5 aqui
    //Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
    const output = [];
    for (let contador = 25;contador >=-25 ;contador-=2){
      
        output.push(contador);
        
    }
    showResults(output, 'kata 5');
}
const buttonkata5 = document.getElementById('kata5');
buttonkata5.addEventListener('click', kata5);


function kata6() {
    // implemente o código do kata 6 aqui
    //Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
    const output = [];
    for (let contador = 3;contador <=100 ;contador+=3){
      
        output.push(contador);
        
    }
    showResults(output, 'kata 6');
}
const buttonkata6 = document.getElementById('kata6');
buttonkata6.addEventListener('click', kata6);

function kata7() {
    // implemente o código do kata 7 aqui
    //Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
    const output = [];
    for (let contador = 7;contador <=100 ;contador+=7){
      
        output.push(contador);
        
    }
    showResults(output, 'kata 7');
}
const buttonkata7 = document.getElementById('kata7');
buttonkata7.addEventListener('click', kata7);

function kata8() {
    // implemente o código do kata 8 aqui
    //Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
    const output = [];
    for (let contador = 0;contador <=100 ;contador++){
      if(contador % 3 == 0 || contador % 7 == 0){
          output.push(contador);
      }
        
        
    }
    showResults(output, 'kata 8');
}
const buttonkata8 = document.getElementById('kata8');
buttonkata8.addEventListener('click', kata8);

function kata9() {
    // implemente o código do kata 9 aqui
    //Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)
        const output = [];
    for (let contador = 0;contador <=100 ;contador++){
      if(contador % 2 == 1 && contador % 5 == 0){
          output.push(contador);
      }
    
        
    }
    showResults(output, 'kata 9');
}
const buttonkata9 = document.getElementById('kata9');
buttonkata9.addEventListener('click', kata9);


function kata10() {
    // implemente o código do kata 10 aqui
    //10. Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
    const output = []; 

    output.push(sampleArray);
    
    showResults(output, 'kata 10');
}
const buttonkata10 = document.getElementById('kata10');
buttonkata10.addEventListener('click', kata10);

function kata11() {
    // implemente o código do kata 11 aqui
    //11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
        const output = [];
       
    
     
        output.push(sampleArray);
        
    
    showResults(output, 'kata 11');
}
const buttonkata11 = document.getElementById('kata11');
buttonkata11.addEventListener('click', kata11);

}

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
}

function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
