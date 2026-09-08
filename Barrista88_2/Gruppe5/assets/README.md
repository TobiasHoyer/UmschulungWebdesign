# BARRISTA 88 v2 — Kaffeemaschinen-Simulation (Projektaufgabe Barrista)

Textbasierte Terminal-Simulation einer Kaffeemaschine im Matrix-Look,
mit Split-Screen: links das vITA-Terminal, rechts der **Teacher Live
Code Inspector**, der live anzeigt, welcher Codeblock gerade ausgeführt
wird (Titel, Code-Snippet, Erklärung in 4 Sprachen, Ausführungslog).

**Starten:** einfach `index.html` im Browser öffnen. Es werden
klassische Skripte benutzt (keine ES-Module), daher funktioniert die
Seite auch direkt vom Dateisystem (`file://`) ohne Webserver.

## Funktionsumfang

**Pflichtbestandteile** (alle erfüllt):
- 20+ selbst definierte Funktionen, 3 Arrays (`drinks`, `statistics`, `reviews`), if-Abfragen, Schleifen, Funktionen mit Rückgabewert
- Menüführung mit Benutzereingabe + Fehlerbehandlung bei ungültigen Eingaben
- Statusanzeige, Bezahlfunktion (Münzen/Karte), Brühfunktion, Qualitätsbewertung

**Erweiterungen:**
- Reinigungsvorgang, Statistik & Umsatzanzeige, Warnung „Service nötig"
- Spezialgetränk (Pumpkin Spice Latte)
- Geheimer Wartungsmodus — Menüpunkt 6, Geheimcode: **`8888`**

**Extras (v2):**
- Matrix-Theme: Phosphorgrün `#00ff41` auf Schwarz, Scanlines, CRT-Glow
- BARRISTA-88-Logo mit Matrix-Animation: Boot-Dekodierung + Dauerschleife
  (alle ~9 s: ≈2 s Glyphen-Dekodierung, ≈7 s Anzeige)
- 4 Sprachen (DE/PL/RU/TR) mit Live-Umschaltung, Farbthemes pro Sprache
  und korrekten Schriftarten (Kyrillisch nutzt Consolas statt VT323)
- Matrix-Footer: Zitat „Your life is just an interactive game" rotierend
  in den 10 meistgesprochenen Weltsprachen mit Dekodier-Übergang
- Besucherzähler unten rechts (localStorage, zählt pro Browser)

## Bedienung

- **Menüwahl:** Ziffer eingeben und ENTER
- **Bezahlung:** Münzen `0.10, 0.20, 0.50, 1.00, 2.00` (Komma erlaubt,
  z. B. `0,50`) oder `karte` / `karta` / `карта` / `kart`;
  Abbruch mit `cancel` / `abbruch` / `anuluj` / `отмена` / `iptal`
- **Wartungsmodus:** Hauptmenü `6` → Geheimcode `8888`
- **Sprache:** Buttons oben rechts im Inspektor (jederzeit, auch mitten
  in einer Eingabe — der aktive Bildschirm wird neu gezeichnet)

## Ladereihenfolge / Module

| Datei                  | Verantwortung (Teilbereich)                                       |
|------------------------|-------------------------------------------------------------------|
| `js/translations.js`   | Sprachregister (`registerLanguage`), `t()`, `promptChoice()`      |
| `js/languages/de.js`   | Wörterbuch Deutsch                                                |
| `js/languages/pl.js`   | Wörterbuch Polnisch                                               |
| `js/languages/ru.js`   | Wörterbuch Russisch                                               |
| `js/languages/tr.js`   | Wörterbuch Türkisch                                               |
| `js/state.js`          | Gemeinsame Variablen, Limits (`MAX_*`), Getränke- & Statistik-Array |
| `js/inspector.js`      | Teacher-Erklärungsdatenbank + `logTeacherStep()` (HUD rechts)     |
| `js/utils.js`          | `sleep()`, `renderProgressBar()`, Matrix-Glyphen-Helfer           |
| `js/language.js`       | Sprachumschalter (Buttons dynamisch generiert), `askUser()`       |
| `js/machine.js`        | Zutatenprüfung, Verbrauch, Service-Warnungen, Preisberechnung     |
| `js/display.js`        | ASCII-Logo, Matrix-Boot-Animation + Logo-Dauerschleife, Header    |
| `js/status.js`         | Statusanzeige (Pflicht)                                           |
| `js/payment.js`        | Bezahlfunktion: Münzen/Karte, Rechnung in Cents (Pflicht)         |
| `js/brewing.js`        | Brühvorgang mit Animation (Pflicht)                               |
| `js/review.js`         | Qualitätsbewertung (Pflicht)                                      |
| `js/order.js`          | Getränkeauswahl + Bestellablauf (Menüführung)                     |
| `js/cleaning.js`       | Reinigungsvorgang (Erweiterung)                                   |
| `js/statistics.js`     | Statistik & Umsatzanzeige (Erweiterung)                           |
| `js/maintenance.js`    | Geheimer Wartungsmodus, Code: `8888` (Erweiterung)                |
| `js/menu.js`           | Hauptmenü + Fehlerbehandlung ungültiger Eingaben                  |
| `js/main.js`           | Programmstart (`window.vitaStart`), Bildschirm-Zustandsmaschine   |
| `js/footer.js`         | Matrix-Footer: rotierendes Zitat (10 Weltsprachen) + Besucherzähler |

## Neue Sprache hinzufügen

1. `js/languages/de.js` nach `js/languages/xx.js` kopieren
2. `registerLanguage('XX', { ... })` eintragen und alle Texte übersetzen
3. In `index.html` ergänzen: `<script src="js/languages/xx.js"></script>`
   (nach den anderen Sprachdateien, vor `js/state.js`)
4. Optional in `css/style.css` einen Farbblock `body.theme-xx { ... }`
   anlegen — ohne ihn gilt das grüne Matrix-Standard-Theme

Der Umschalt-Button erscheint automatisch (wird aus den registrierten
Sprachen generiert). Die Inspektor-Texte (`js/inspector.js`) fallen für
nicht übersetzte Sprachen automatisch auf Deutsch zurück.

## Technische Hinweise

- Die Skripte teilen sich den globalen Scope: `state.js` definiert die
  gemeinsamen Variablen (`water`, `beans`, …), alle anderen Module
  lesen und ändern sie. Neue Texte immer in **allen Sprachen** in
  `js/languages/` ergänzen.
- Die Bezahlung rechnet intern in **ganzen Cents**, um
  Fließkomma-Rundungsfehler (IEEE 754) zu vermeiden. Kartenzahlungen
  zählen zum Umsatz, landen aber nicht in der Münzkasse.
- Der Besucherzähler nutzt `localStorage` und zählt daher pro Browser.
  Für einen globalen Zähler (nach Veröffentlichung über den
  vita-Tunnel) wäre ein Server-Endpunkt nötig.
- Die Logo-Dauerschleife animiert direkt die gerenderten DOM-Zeilen des
  Terminals — Menüs und Eingaben bleiben davon unberührt.
