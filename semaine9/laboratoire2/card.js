var deck; 

window.onload = function() {
    buildDeck(); 
}


function buildDeck() {
    
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["d", "c", "h", "s"]; 
    deck=[]
    for (let i = 0; i < types.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < values.length; j++) { 
            deck.push("cartes/"+values[j] + types[i]+".gif")
            let cell = document.createElement("td");
            let cellImg = document.createElement("img")
            cellImg.src = "cartes/"+values[j] + "" + types[i]+".gif" 
            cell.appendChild(cellImg);
            row.appendChild(cell);
        }
        document.getElementById("tabcard").appendChild(row)
    } 
    
}


function shuffleDeck() { 
    
    let half_deck = deck.length / 2     
    let new_deck = [];    
    let paquet_tmp_1 = deck.slice(0, half_deck)
    let paquet_tmp_2 = deck.slice(half_deck, deck.length) 
    for (let i = 0; i < half_deck; i++) { 
        new_deck.push(paquet_tmp_1[i])
        new_deck.push(paquet_tmp_2[i]) 
    }  

    let lignes = document.getElementById("tabcard").children.length 
    let colonnes = document.getElementById("tabcard").children[0].childNodes.length
    let z =0;
    while (z < new_deck.length) {
        for (let i = 0; i <lignes ; i++) { 
            for (let j = 0; j < colonnes; j++) {  
                document.getElementById("tabcard").children[i].childNodes[j].childNodes[0].src=new_deck[z]
                z++
            } 
        }         
    }
    deck = new_deck
}

