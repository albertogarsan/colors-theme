function saveUserPreference(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function applyUserPreference() {
    const savedScheme = localStorage.getItem('color-scheme');
    if (savedScheme) {
        document.documentElement.setAttribute('color-scheme', savedScheme);
    }

    // Seleccionar el radio-button correspondiente al esquema guardado
    const radioButton = document.querySelector(`input[name="theme"][value="${savedScheme}"]`);
    if (radioButton) {
        radioButton.checked = true;  // Marca el radio-button como seleccionado
    }
}

function setTheme(theme) {
    doc.setAttribute('color-scheme', theme);
}

const switcher = document.getElementById("theme-switcher");
const doc = document.firstElementChild;

window.onload = applyUserPreference;

switcher.addEventListener("input", (e) => {
    setTheme(e.target.value);
    saveUserPreference(e.target.value);
});







