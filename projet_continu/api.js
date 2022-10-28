document.querySelector("#codepostal").addEventListener('input', function(){
  if (this.value.length == 5){
      let curl= `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

      fetch(curl).then((response) => response.json().then((data) => {
        console.log(data)
        let affichage = '<table style="border: 1px solid black; width:60%; ">'
        for(let ville of data){
            affichage += `<tr><td style="border: 1px solid black; margin-left: 5em;"><strong>${ville.code}</strong><strong>${ville.nom}</strong><strong>${ville.population}</strong><td></tr>`
        }   
        affichage +='</table>'
        document.querySelector("#villes").innerHTML = affichage
    }
    ))
  }
});


 