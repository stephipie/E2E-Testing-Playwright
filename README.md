Playwright Übung

📌 Aufgaben:


🟢 Aufgabe 1: Webseiten-Titel überprüfen
🔹 Aufgabe:
 Schreibt einen Playwright-Test, der prüft, ob eine Webseite den richtigen Titel hat.
 💡 Beispiel-Seiten:
https://example.com (Titel: "Example Domain")
https://www.wikipedia.org/ (Titel: "Wikipedia")


🟡 Aufgabe 2: Navigationselemente prüfen
🔹 Aufgabe:
 Testet, ob auf der Startseite von https://www.wikipedia.org/ eine Navigationsleiste mit Links vorhanden ist.

🟠 Aufgabe 3: Formular testen
🔹 Aufgabe:
 Testet, ob sich in https://www.saucedemo.com/ ein Benutzer erfolgreich anmelden kann.
 💡 Login-Daten:
 Benutzername: standard_user
 Passwort: secret_sauce


🔴 Aufgabe 4: Suchfunktion testen
🔹 Aufgabe:
 Testet die Suchfunktion auf https://www.wikipedia.org/.
Gebt „Playwright“ in das Suchfeld ein
Prüft, ob die Suchergebnisse geladen werden


🟢 Aufgabe 5: Screenshot & Debugging
🔹 Aufgabe:
 Schreibt einen Test, der einen Screenshot speichert, wenn die Seite geladen wurde.
📌 Fortgeschrittene Playwright-Aufgaben

🟢 Aufgabe 1: Mehrstufige Navigation testen
🔹 Aufgabe:
Öffne https://www.wikipedia.org/
Wähle eine Sprache (z. B. "English")
Navigiere zum Artikel „Playwright“ über die Suche
Prüfe, ob die Überschrift „Playwright (software)“ auf der Seite erscheint
💡 Zusätzliche Herausforderung: Prüfe, ob die Sprache der Seite korrekt gesetzt ist.


🟡 Aufgabe 2: Validierung von Formulareingaben
🔹 Aufgabe:
Teste die Fehlermeldungen auf https://www.saucedemo.com/
Versuche, dich mit leeren Feldern einzuloggen
Teste, was passiert, wenn du ein falsches Passwort eingibst
Prüfe, ob die korrekte Fehlermeldung erscheint
💡 Zusätzliche Herausforderung: Speichere einen Screenshot, wenn der Test fehlschlägt.


🟠 Aufgabe 3: Produkt zum Warenkorb hinzufügen & Checkout testen
🔹 Aufgabe:
Melde dich auf https://www.saucedemo.com/ an
Füge ein Produkt zum Warenkorb hinzu
Gehe zum Warenkorb und starte den Checkout
Fülle das Bestellformular aus und bestätige die Bestellung
Prüfe, ob die Bestätigungsseite die Nachricht "Thank you for your order!" enthält
💡 Zusätzliche Herausforderung:
Prüfe, ob die Anzahl der Warenkorb-Artikel korrekt ist
Simuliere ein fehlerhaftes Bestellformular (z. B. ohne Postleitzahl)


🔴 Zusatzaufgabe 4: API-Testing mit Playwright
🔹 Aufgabe:
Teste, ob eine API korrekt antwortet
Verwende Playwrights request-Funktion, um eine HTTP-GET-Anfrage zu senden
Prüfe, ob der Statuscode 200 ist und die Antwort die erwarteten Daten enthält
💡 Zusätzliche Herausforderung:
Simuliere einen API-Fehler
Teste verschiedene Endpunkte



🟢 Zusatzaufgabe 5: Mobile-Emulation & Responsive-Test
🔹 Aufgabe:
Teste, ob eine Webseite auf einem iPhone richtig angezeigt wird
Verwende Playwrights Geräte-Emulation für mobile Tests
Prüfe, ob sich das Layout verändert
💡 Zusätzliche Herausforderung:
Teste für verschiedene Geräte (iPhone, iPad, Galaxy S9)
Prüfe, ob Navigationselemente in der mobilen Ansicht sichtbar sind
