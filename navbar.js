document.addEventListener("DOMContentLoaded", function() {
    // Hier holen wir die Navbar aus der externen Datei
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Fügt den Navbar-Code an das entsprechende Element auf der Seite ein
            const navbarContainer = document.querySelector('.navbar-container');
            navbarContainer.innerHTML = data;

            // Funktion zum Hervorheben der Links
            //wird hier aufgerufen, weil die navbar erst nach dem DOMContentLoaded geladen wird
            highlightCurrentLink();
        })
        .catch(error => console.error(error));
});

function highlightCurrentLink() {
    // Hole alle Links in der Navbar
    const navLinks = document.querySelectorAll('.nav-grid-container-item a');

    // Geht durch jeden Link und überprüfe, ob die URL mit dem href übereinstimmt
    navLinks.forEach(link => {
        // Überprüfe, ob die URL des Links mit der aktuellen Seiten-URL übereinstimmt
        if (link.href === window.location.href) {
            // Hervorhebe den Link
            link.style.fontWeight = '900'; //fett
            //link.style.color = 'blue'; //blau, nur alternativ
        }
    });
}

