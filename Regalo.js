window.addEventListener('DOMContentLoaded', (event) => {
    var nameSpan = document.getElementById('birthdayPerson');
    var name = prompt('Ingrese el nombre del cumpleañero:');
    nameSpan.textContent = name;
});
