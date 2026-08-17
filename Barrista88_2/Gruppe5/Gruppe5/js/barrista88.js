
            const displayElement = document.getElementById("display");
            const powerButton = document.getElementById("power");
            const ausDisplay = document.getElementById("aus");
            const anDisplay = document.getElementById("hauptmenü");
            const getränkeMenü = document.getElementById("getränke");
            const spezielMenü = document.getElementById("secret");

            let power = false;

             const balkenBreite = 10;

            const maxBohnen = 100;
            let bohnen = maxBohnen;

            const maxWasser = 2;
            let wasser = maxWasser;

            const maxMilch = 2;
            let milch = maxMilch;

            const maxBrühe = 100;
            let brühe = maxBrühe;

            const maxKakao = 100;
            let kakao = maxKakao;

            let gebruehteGetraenke = 0;
            let durchgängeSeitreinigung = 0;

            const zahlungsArten = ["Bargeld", "Karte"];

            let guthaben = 0;
            let bezahlt = false;

            const getränke = ["Kaffee", "Brühe", "Kakao", "Milch"];            
            const preise = [1.5, 2.3, 1.3, 1];

            let statKaffee = 0;
            let statBrühe = 0;
            let statKakao = 0;
            let statMilch = 0;

            let bewertung5 = 0;
            let bewertung4 = 0;
            let bewertung3 = 0;

            let bewertung2 = 0;

            let bewertung1 = 0;

            let anzahlBewertungen = 0;

            let fehler = 0;

            let geheimnis = false;

            



            async function anAus(){     //An-Aus Anzeige                                       
                         
                if(power){
                    ausDisplay.classList.add("versteckt");
                    hauptMenü();

                    }
                else if(!power){
                    ausDisplay.classList.remove("versteckt");
                    anDisplay.classList.add("versteckt");
                }
            }
            

              async function hauptMenü() {

                anDisplay.classList.remove("versteckt");
                    }

                async function hauptMenü2() {
                    const response = await fetch('hauptmenü2.html');
                    const html = await response.text();
                    displayElement.innerHTML = html;
                    }


                powerButton.addEventListener("click", function (){  //An- und Ausschalten interaktiv
                    power = !power;
                    anAus();
                }) 

              
                anAus();  //Programmstart*/




