
            const displayElement = document.getElementById("display");
            const powerButton = document.getElementById("power");
            const ausDisplay = document.getElementById("aus");
            const anDisplay = document.getElementById("hauptmenü");
            const getränkeMenü = document.getElementById("getränkemenü");
            const spezialMenü = document.getElementById("spezialmenü");
            const geheimMenü = document.getElementById("geheimmenü");
            const reinigungsMenü = document.getElementById("reinigungsmenü");
            const auffüllMenü = document.getElementById("auffüllmenü");
            const auffüllenUntermenü = document.getElementById("untermenü");

            const btnGetränke = document.getElementById("getränke");
            const btnAuffüllen = document.getElementById("auffüllen");
            const btnAuffüllen2 = document.getElementById("auffüllung")
            const btnReinigen = document.getElementById("reinigen");
            const btnStatistik = document.getElementById("statistik");
            const btnGeheim = document.getElementById("geheim");
            const btnSpezial = document.getElementById("spezial");
    

            const btnKaffee = document.getElementById("kaffee");
            const btnBrühe = document.getElementById("brühe");
            const btnKakao = document.getElementById("kakao");
            const btnMilch = document.getElementById("milch");

            const btnAuffüllenKaffee = document.getElementById("auffüllenKaffee");
            const btnAuffüllenKakao = document.getElementById("auffüllenKakao");
            const btnAuffüllenBrühe = document.getElementById("auffüllenBrühe");
            const btnAuffüllenWasser = document.getElementById("auffüllenWasser");
            const btnAuffüllenMilch = document.getElementById("auffüllenMilch");
            const btnAuffüllenAlles = document.getElementById("auffüllenAlles");

            const btnGeheimSenden = document.getElementById("btnGeheimSenden");
            const frage1Input = document.getElementById("frage1");
            const frage2Input = document.getElementById("frage2");

            const btnIceT = document.getElementById("iceT");
            const btnPinaColada = document.getElementById("pina");
            const btnGin = document.getElementById("gin");
            const btnMoscow = document.getElementById("moscow");
            const btnRussian = document.getElementById("russian");

            const btnAbbruch = document.getElementById("abbruch");
            const btnZurück = document.getElementById("zurück");
            const fortschritt = document.getElementById("fortschritt");

            const reinigenStatistik = document.getElementById("reinugungsstatistik");
            const btnReinigungStarten = document.getElementById("start");

            const füllStatistik = document.getElementById("füllstatistik");

            const balkenBreite = 10;

            let power = false;

            let auswahl;
            let spezialAuswahl;
            let wasFüllen;

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
                    btnZurück.classList.add("versteckt");
                    getränkeMenü.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                    geheimMenü.classList.add("versteckt");
                    fortschritt.innerText = "";
                    reinigungsMenü.classList.add("versteckt");
                    auffüllMenü.classList.add("versteckt");
                    auffüllenUntermenü.classList.add("versteckt");
                }
            }

                //Hauptmenü
                function hauptMenü() {
                    anDisplay.classList.remove("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    btnZurück.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                    reinigungsMenü.classList.add("versteckt");
                    auffüllMenü.classList.add("versteckt");
                    auffüllenUntermenü.classList.add("versteckt");
                    fortschritt.innerText = "";
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
                            reinigungsMenü.classList.remove("versteckt");
                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "statistik":
                            anDisplay.classList.add("versteckt");
                            statistikAnzeigen();
                            btnAbbruch.classList.remove("versteckt");
                            break;
                        case "auffüllen":
                            anDisplay.classList.add("versteckt");
                            auffüllMenü.classList.remove("versteckt");
                            btnAbbruch.classList.remove("versteckt");
                            füllstandskontrolle();
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
                        case"auffüllung":
                            anDisplay.classList.add("versteckt");
                            auffüllMenü.classList.add("versteckt");
                            auffüllenUntermenü.classList.remove("versteckt");
                            btnZurück.classList.remove("versteckt");
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
                            break;
                        case"Milch":
                            if(milch >= 0.4)return true;
                            else return false;
                            break;
                    }
                }

                //Füllstände anzeigen
                function füllstandskontrolle(){
                    const stoffe = ["Kaffeebohnen", "Brühe", "Kakaopulver", "Wasser(l)", "Milch(l)"];
                    const stände = [bohnen, brühe, kakao, wasser, milch];

                    let ausgabe = "";

                    for(let i = 0; i < stoffe.length; i++){
                        ausgabe += `${stoffe[i]}: ${stände[i]}\n`;
                    }
                    füllStatistik.innerText = ausgabe;
                }

                //Auffüllfunktion
                function stoffeAuffüllen(auswahl){
                    switch(auswahl){
                        case"kaffee":
                            bohnen = maxBohnen;
                            alert("Kaffee wure aufgefüllt");
                            zeigeMenü();
                            break;
                        case"kakao":
                            kakao = maxKakao
                            alert("Kakao wure aufgefüllt");
                            zeigeMenü();
                            break;
                        case"brühe":
                            brühe = maxBrühe;
                            alert("Brühe wure aufgefüllt");
                            zeigeMenü();
                            break;
                        case"wasser":
                            wasser = maxWasser;
                            alert("Wasser wure aufgefüllt");
                            zeigeMenü();
                            break;
                        case"milch":
                            milch = maxMilch;
                            alert("Milch wure aufgefüllt");
                            zeigeMenü();
                            break;
                        case"alles":
                            bohnen = maxBohnen;
                            kakao = maxKakao;
                            brühe = maxBrühe;
                            wasser = maxWasser;
                            milch = maxMilch;
                            alert("Alles aufgefüllt");
                            zeigeMenü();
                            break;
                    }

                }

                //Fortschrittsanzeigeunktion
                async function zeigeLadebalken(auswahl) {
                    for (let i = 0; i <= balkenBreite; i++) {

                    if(!power) return;

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

                //Reinigungsfunktion

                async function reinigungsFortschritt() {
                    for (let i = 0; i <= balkenBreite; i++) {
                    
                    if(!power) return;
                    
                    let geladen = "#".repeat(i);
                    let leer = "-".repeat(balkenBreite - i);
        
                    fortschritt.innerText = `Reinigung wird durchgeführt...\n[${geladen}${leer}]`;
        
                     await new Promise(resolve => setTimeout(resolve, 300));
                    }
    
                    fortschritt.innerText = `Reinigungsvorgang abgeschlossen`;

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
                    zeigeMenü();
                });

                btnAuffüllen2.addEventListener("click", function(){ //Untermenü
                    if(!power) return;
                    auswahl = "auffüllung";
                    zeigeMenü();
                });

                btnReinigen.addEventListener("click", function(){
                    if(!power) return;
                    auswahl="reinigen";
                    zeigeMenü();
                    reinigenStatistik.innerText = "Durchgänge seit letzter Reinigung: " + gebruehteGetraenke;
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

                //Auffüllen-Untermenü

                btnAuffüllenKaffee.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen = "kaffee";                 
                    stoffeAuffüllen(wasFüllen);
                });

                    btnAuffüllenKakao.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen = "kakao";                   
                    stoffeAuffüllen(wasFüllen);
                });

                    btnAuffüllenBrühe.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen = "brühe"                   
                    stoffeAuffüllen(wasFüllen);
                });

                    btnAuffüllenWasser.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen =  "wasser"                 
                    stoffeAuffüllen(wasFüllen);
                });

                    btnAuffüllenMilch.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen = "milch"                  
                    stoffeAuffüllen(wasFüllen);
                });

                    btnAuffüllenAlles.addEventListener("click", function(){
                    if(!power) return;
                    wasFüllen = "alles"                  
                    stoffeAuffüllen(wasFüllen);
                });


                //Abbruch-Knopf
                btnAbbruch.addEventListener("click", function(){
                    getränkeMenü.classList.add("versteckt");
                    spezialMenü.classList.add("versteckt");
                    geheimMenü.classList.add("versteckt");
                    fortschritt.innerText = "";
                    reinigungsMenü.classList.add("versteckt");
                    auffüllenUntermenü.classList.add("versteckt");
                    hauptMenü();
                });

                //Zurück-Knopf

                btnZurück.addEventListener("click", function(){
                    auffüllenUntermenü.classList.add("versteckt");
                    auffüllMenü.classList.remove("versteckt");
                    btnZurück.classList.add("versteckt");
                });


                //Getränkeauswahl
                btnKaffee.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    const brühen = betriebsstoffePrüfen("Kaffee");
                    if(brühen && gebruehteGetraenke < 5) {
                        await zeigeLadebalken("Kaffee");
                        bohnen -= 10;
                        wasser -= 0.3;
                        statKaffee +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;

                    }
                    else {
                        alert("Achtung! Betriebsstoffe & Reinigunszustand prüfen!");
                        hauptMenü();
                    }    
                });

                btnBrühe.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Brühe");
                    if(brühen && gebruehteGetraenke < 5) {
                        await zeigeLadebalken("Brühe");
                        brühe -= 10;
                        wasser -= 0.3;
                        statBrühe +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe & Reinigunszustand prüfen!");
                        hauptMenü();
                    }    
                })

                btnKakao.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Kakao");
                    if(brühen && gebruehteGetraenke < 5) {
                        await zeigeLadebalken("Kakao");
                        kakao -= 10;
                        milch -= 0.3;
                        statKakao +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe & Reinigunszustand prüfen!");
                        hauptMenü();
                    }    
                })

                btnMilch.addEventListener("click", async function(){
                    getränkeMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                   const brühen = betriebsstoffePrüfen("Milch");
                    if(brühen && gebruehteGetraenke < 5) {
                        await zeigeLadebalken("Milch");
                        milch -= 0.3;
                        statMilch +=1;
                        gebruehteGetraenke +=1;
                        durchgängeSeitreinigung +=1;
                    }
                    else {
                        alert("Achtung! Betriebsstoffe & Reinigunszustand prüfen!");
                        hauptMenü();
                    }    
                })

                //Reinigungsvorgang
                btnReinigungStarten.addEventListener("click", async function(){
                    reinigungsMenü.classList.add("versteckt");
                    btnAbbruch.classList.add("versteckt");
                    await reinigungsFortschritt();
                    gebruehteGetraenke = 0;
                });
                
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

                    
                //Programmstart
                anAus();  



           

                    
                




