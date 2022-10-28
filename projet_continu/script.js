        
  let taille1 = document.querySelector('#taille1');
  let poids1 = document.querySelector('#poids1')
  let button1 = document.querySelector('#button1');
  let resultat1 = document.querySelector('#result1')




  let taille2 = document.querySelector('#taille2');
  let poids2 = document.querySelector('#poids2')
  let button2 = document.querySelector('#button2');
  let resultat2 = document.querySelector('#result2')
 


    function fonction1() {

            let taille11 = parseFloat(taille1.value)
            let poids11 = parseFloat(poids1.value)
            let imc = (poids11 / ((taille11 * taille11) / 10000)).toFixed(2); 

            if ( isNaN (taille11) || taille11 <=0){
              document.getElementById('erreurs_taille1').innerHTML = 'La valeur de la taille est incorrecte';
            }
            if ( isNaN (poids11) || poids11 <=0){
              document.getElementById('erreurs_poids1').innerHTML = 'La valeur du poids est incorrect';
    }  
      
            if (imc  < 18.6){
              resultat1.innerHTML =  'IMC :' +imc +' Vous etes en dessous du poids ' ;
            } else 

            if (imc  >= 18.6 && imc < 24.9 ){
              resultat1.innerHTML = 'IMC :' +imc + ' Votre poids est normal :'  ;
            } else 

            {
              resultat1.innerHTML = 'IMC :' +imc + ' Vous etes au dessus du poids' ;
            } 
 
  } 
   
    function fonction2() {
            let taille22 = parseFloat(taille2.value)
            let poids22 = parseFloat(poids2.value)
            let imc = (poids22 / ((taille22 * taille22) / 703)).toFixed(2);

            if ( isNaN (taille22) || taille22 <=0){
              document.getElementById('erreurs_taille2').innerHTML = 'La valeur de la taille est incorrecte';
            }
            if ( isNaN (poids22) || poids22 <=0){
              document.getElementById('erreurs_poids2').innerHTML = 'La valeur du poids est incorrect';
    }  
            if (imc  < 18.6){
              resultat2.innerHTML =  'IMC :' +imc +' Vous etes en dessous du poids ' ;
            } else 

            if (imc  >= 18.6 && imc < 24.9 ){
              resultat2.innerHTML = 'IMC :' +imc + ' Votre poids est normal :'  ;
            } else 

            {
              resultat2.innerHTML = 'IMC :' +imc + ' Vous etes au dessus du poids' ;
            }

          } 