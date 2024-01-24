// Button-Element holen
const button = document.getElementById('uploadButton');

// Modal und Schließen-Element holen
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Formular-Element holen
const form = document.getElementById('uploadForm');

// Funktion, um das Modal zu öffnen
button.onclick = function() {
    modal.style.display = 'block';
}

// Funktion, um das Modal zu schließen
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Funktion, um das Modal zu schließen, wenn außerhalb des Modals geklickt wird
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Funktion, um das Formular abzusenden (hier kannst du die Logik für das Absenden implementieren)
form.onsubmit = function(event) {
    event.preventDefault(); // Verhindert das tatsächliche Absenden des Formulars
    // Hier kannst du die Logik für das Absenden des Formulars implementieren
    console.log('Formular abgesendet!');
    // Hier könntest du weitere Aktionen ausführen, z.B. die Daten an einen Server senden
    // oder eine Bestätigungsmeldung anzeigen
}
