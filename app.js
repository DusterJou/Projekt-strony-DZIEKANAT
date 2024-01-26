
// Funkcja do zliczania odwiedzin
function incrementVisitCount() {
    // Sprawdź, czy istnieje zmienna w localStorage
    if (localStorage.getItem('visitCount') === null) {
        // Jeśli nie istnieje, utwórz zmienną i ustaw na 1
        localStorage.setItem('visitCount', 1);
    } else {
        // Jeśli istnieje, zwiększ wartość o 1
        let count = parseInt(localStorage.getItem('visitCount'));
        count++;
        localStorage.setItem('visitCount', count);
    }

    // Pobierz element, który będzie wyświetlał liczbę odwiedzin
    let visitCountDisplay = document.getElementById('visitCountDisplay');

    // Wyświetl aktualną liczbę odwiedzin na stronie
    visitCountDisplay.textContent = localStorage.getItem('visitCount');
}

// Wywołaj funkcję przy załadowaniu strony
incrementVisitCount();
