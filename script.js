document.addEventListener('DOMContentLoaded', () => {

    /* GESTION DES ACCORDÉONS */
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


    /* BOUTON RETOUR EN HAUT */
    const boutonHaut = document.getElementById('bouton-retour');

    if (boutonHaut) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                boutonHaut.classList.add('visible');
            } else {
                boutonHaut.classList.remove('visible');
            }
        });

        boutonHaut.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});