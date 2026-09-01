
            const displayElement = document.getElementById("display");
            const powerButton = document.getElementById("power");
            const ausDisplay = document.getElementById("aus");
            const anDisplay = document.getElementById("hauptmenü");
            const getränkeMenü = document.getElementById("getränkemenü");
            const spezialMenü = document.getElementById("spezialmenü");
            const geheimMenü = document.getElementById("geheimmenü");

            const btnGetränke = document.getElementById("getränke");
            const btnAuffüllen = document.getElementById("auffüllen");
            const btnReinigen = document.getElementById("reinigen");
            const btnStatistik = document.getElementById("statistik");
            const btnGeheim = document.getElementById("geheim");
            const btnSpezial = document.getElementById("spezial");

            const btnKaffee = document.getElementById("kaffee");
            const btnBrühe = document.getElementById("brühe");
            const btnKakao = document.getElementById("kakao");
            const btnMilch = document.getElementById("milch");

            const btnGeheimSenden = document.getElementById("btnGeheimSenden");
            const frage1Input = document.getElementById("frage1");
            const frage2Input = document.getElementById("frage2");

            const btnIceT = document.getElementById("iceT");
            const btnPinaColada = document.getElementById("pina");
            const btnGin = document.getElementById("gin");
            const btnMoscow = document.getElementById("moscow");
            const btnRussian = document.getElementById("russian");

            const btnAbbruch = document.getElementById("abbruch");
            const fortschritt = document.getElementById("fortschritt");

            const balkenBreite = 10;

            let power = false;

            let auswahl;
            let spezialAuswahl;

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

            //Funktionen
            function anAus(){                                                      
                if(power){
                    ausDisplay.classList.add("versteckt");
                    hauptMenü();
                }
            
                else if(!power){
                    ausDisplay.classList.remove("versteckt");
                    anDisplay.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    getränkeMenü.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                    geheimMenü.classList.add("versteckt");
                    fortschritt.innerText = "";

                }
            }

                //Hauptmenü
                function hauptMenü() {
                    anDisplay.classList.remove("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                
                    if(geheimnis) btnSpezial.classList.remove("versteckt");
                    else btnSpezial.classList.add("versteckt");
                    }
                    
                //Menüs ein- und ausblenden
                function zeigeMenü(){
                    anDisplay.classList.add("versteckt");

                    switch(auswahl){
                        case "getränke":
                            anDisplay.classList.add("versteckt");
                            getränkeMenü.classList.remove("versteckt");
                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "reinigen":
                            anDisplay.classList.add("versteckt");

                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "statistik":
                            anDisplay.classList.add("versteckt");
                            statistikAnzeigen();
                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "auffüllen":
                            anDisplay.classList.add("versteckt");

                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "geheim":
                            anDisplay.classList.add("versteckt");
                            geheimMenü.classList.remove("versteckt");
                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "spezial":
                            anDisplay.classList.add("versteckt")
                            spezialMenü.classList.remove("versteckt");
                            btnAbbruch.classList.remove("versteckt");
                            break;
                    }
                }
                //Betriebsstoffe prüfen
                function betriebsstoffePrüfen(auswahl){
                    switch(auswahl){
                        case "Kaffee":
                            if(bohnen >=30 && wasser >=0.4) return true;
                            else return false;
                            break;
                        case "Brühe":
                            if(brühe >= 30 && wasser >= 0.4) return true;
                            else return false;
                            break;
                        case"Kakao":
                            if(milch >= 0.4 && kakao >= 30) return true;
                            else return false;
                        case"Milch":
                            if(milch >= 0.4)return true;
                            else return false;
                    }
                }
                //Fortschrittsanzeigeunktion
                async function zeigeLadebalken(auswahl) {
                    for (let i = 0; i <= balkenBreite; i++) {
                    let geladen = "#".repeat(i);
                    let leer = "-".repeat(balkenBreite - i);
        
                    fortschritt.innerText = `${auswahl} wird zubereitet...\n[${geladen}${leer}]`;
        
                     await new Promise(resolve => setTimeout(resolve, 300));
                    }
    
                    fortschritt.innerText = `${auswahl} ist fertig! ☕`;

                     await new Promise(resolve => setTimeout(resolve, 800));
                    fortschritt.innerText = "";
                    hauptMenü();
                }
              
                //Statistikfunktion
                async function statistikAnzeigen() {                                       

                const getraenkeNamen = ["Kaffee", "Brühe", "Kakao", "Milch"];
                const statistikWerte = [statKaffee, statBrühe, statKakao, statMilch];
                let ausgabe = "";
                
                for(let i = 0; i < getraenkeNamen.length; i++)
                    ausgabe += `${getraenkeNamen[i]}: ${statistikWerte[i]}\n`;

                fortschritt.innerText = ausgabe;
            }
    
                    
                 

                //Programmstart
                anAus();  


                //An-Aus Knopf
                powerButton.addEventListener("click", function (){  
                    power = !power;
                    anAus();
                })

                //Hauptmenü-knöpfe
                btnGetränke.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="getränke";
                    zeigeMenü();
                });

                btnAuffüllen.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="auffüllen";
                });

                btnReinigen.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="reinigen";
                });

                btnStatistik.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="statistik";
                    zeigeMenü();
                });

                btnGeheim.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="geheim";
                    zeigeMenü();
                });

                btnSpezial.addEventListener("click", function(){
                    if(!power)return;
                    auswahl="spezial";
                    zeigeMenü();
                });

                //Abbruch-Knopf
                btnAbbruch.addEventListener("click", function(){
                    getränkeMenü.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                    geheimMenü.classList.add("versteckt");
                    fortschritt.innerText = "";
                    hauptMenü();
                });


                //Getränkeauswahl
                btnKaffee.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    const brühen = betriebsstoffePrüfen("Kaffee");
                    if(brühen) {
                        await zeigeLadebalken("Kaffee");
                        bohnen -= 10;
                        wasser -= 0.3;
                        statKaffee +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;

                    }
                    else {
                        alert("Achtung! Betriebsstoffe prüfen!");
                        hauptMenü();
                    }    
                });

                btnBrühe.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Brühe");
                    if(brühen) {
                        await zeigeLadebalken("Brühe");
                        brühe -= 10;
                        wasser -= 0.3;
                        statBrühe +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe prüfen!");
                        hauptMenü();
                    }    
                })

                btnKakao.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Kakao");
                    if(brühen) {
                        await zeigeLadebalken("Kakao");
                        kakao -= 10;
                        milch -= 0.3;
                        statKakao +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe prüfen!");
                        hauptMenü();
                    }    
                })

                btnMilch.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Milch");
                    if(brühen) {
                        await zeigeLadebalken("Milch");
                        milch -= 0.3;
                        statMilch +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe prüfen!");
                        hauptMenü();
                    }    
                })

                //Geheimmenü-Check

                btnGeheimSenden.addEventListener("click", function(){
                    const geheim1 = frage1Input.value.toLowerCase();
                    const geheim2 = frage2Input.value.toLowerCase();

                    if(geheim1.includes("afrikanische") && geheim1.includes("europäische") && geheim1.includes("schwalbe")  && geheim2.includes("42")){
                        geheimnis = true;
                        alert("Das Spezialmenü wurde freigeschaltet");

                        frage1Input.value = "";
                        frage2Input.value = "";
                        geheimMenü.classList.add("versteckt");
                        hauptMenü();
                    }
                    else{
                        fehler +=1;
                        alert("Die Eingabe ist falsch")
                    }
                        if(fehler === 3){
                            alert("WARNUNG: Zu viele Fehler, Menü wird gesperrt!");
                            btnGeheim.classList.add("versteckt");
                            geheimMenü.classList.add("versteckt");
                            hauptMenü();
                        }
                });

                //Spezialauswahl
                btnIceT.addEventListener("click", function(){
                    alert("Nicht während der Arbeiszeit!");
                    hauptMenü();
                });

                btnPinaColada.addEventListener("click", function(){
                    alert("Nicht während der Arbeiszeit!");
                    hauptMenü();
                });

                btnGin.addEventListener("click", function(){
                    alert("Nicht während der Arbeiszeit!");
                    hauptMenü();
                });

                btnMoscow.addEventListener("click", function(){
                    alert("Nicht während der Arbeiszeit!");
                    hauptMenü();
                });

                btnRussian.addEventListener("click", function(){
                    alert("Nicht während der Arbeiszeit!");
                    hauptMenü();
                });

           

                    
                




