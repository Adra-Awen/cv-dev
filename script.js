const enTetes = document.querySelectorAll('.en-tete');

enTetes.forEach(entete => {
    entete.addEventListener('click', () => {
        enTetes.forEach(autreEntetes => {
            if (autreEntetes !== entete) {
                autreEntetes.classList.remove('actif');
            }
        });
        entete.classList.toggle('actif');
    });
});