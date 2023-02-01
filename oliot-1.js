var teksti = "";
var nappi = document.getElementById("nappi");
var nappi2 = document.getElementById("nappi2");

//Eventhandlermuuttujia
var nappiTilanne = false;
var nappiTilanne2 = false;

class Auto {
    constructor(merkki, malli, vuosimalli, nopeus, speedZero) {
        this.merkki = merkki; // Merkki
        this.malli = malli; // Malli
        this.vuosimalli = vuosimalli; // Vuosimalli
        this.nopeus = nopeus; // Maksiminopeus
        this.speedZero = speedZero; // Ottaa myös nollanopeuden listaan
    }
    aja(nopeus, speedZero) {
        if (this.speedZero >= this.nopeus) {
            teksti = document.getElementById("nopeus").innerHTML = "Nopeus: 440km/h"
        } else {
            this.speedZero += 3;
            teksti = document.getElementById("nopeus").innerHTML = "Nopeus: " + this.speedZero + "km/h";
        }
        return this.nopeus, this.speedZero;
    }
    jarruta(nopeus, speedZero) {
        if (this.speedZero == 0) {
            teksti = document.getElementById("nopeus").innerHTML = "Nopeus: 0km/h"
        } else {
            this.speedZero -= 3;
            teksti = document.getElementById("nopeus").innerHTML = "Nopeus: " + this.speedZero + "km/h";
        }
        return this.nopeus, this.speedZero
    }
    naytaTiedot() {
        document.getElementById("tiedot").innerHTML = "Merkki: " + this.merkki +". Malli: "+ this.malli +". Vuosimalli: "+ this.vuosimalli +". Maksiminopeus: " + this.nopeus;
        console.log(this.merkki);
        console.log(this.malli);
        console.log(this.vuosimalli);
        console.log(this.nopeus);
        console.log(this.speedZero);
    }
}

var bugatti = new Auto("Bugatti", "Chiron", 20222, 440, 0);



// Eventlistenerit jotta nappia voi pitää pohjassa
nappi.addEventListener('mousedown', e => {
    nappiTilanne = true;
    eteen();
  });
  
  nappi.addEventListener('mouseup', e => {
    nappiTilanne = false;
    eteen();
  });

  function eteen(){
    if (nappiTilanne) {
        interval = setInterval(() => {
          bugatti.aja();
        }, 100);    
      }else{
        clearInterval(interval);
      }
}

  nappi2.addEventListener('mousedown', e => {
    nappiTilanne2 = true;
    jarruta();
  });
  
  nappi2.addEventListener('mouseup', e => {
    nappiTilanne2 = false;
    jarruta();
  });

  function jarruta() {
    if (nappiTilanne2) {
        interval2 = setInterval(() => {
          bugatti.jarruta();
        }, 100);    
      }else{
        clearInterval(interval2);
  }
}