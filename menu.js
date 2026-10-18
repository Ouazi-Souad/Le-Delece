// Page Menu : recherche + filtres par catégorie

var recherche = document.getElementById("recherche");
var boutons = document.querySelectorAll(".filtre");
var plats = document.querySelectorAll("#grille-menu .plat");
var aucun = document.getElementById("aucun");

var categorie = "tous"; // catégorie choisie

// Affiche ou cache chaque plat
function afficher() {
    var texte = recherche.value.toLowerCase();
    var nombre = 0;

    for (var i = 0; i < plats.length; i++) {
        var nom = plats[i].querySelector(".nom").textContent.toLowerCase();
        var cat = plats[i].dataset.categorie;

        if ((categorie == "tous" || cat == categorie) && nom.includes(texte)) {
            plats[i].style.display = "block";
            nombre = nombre + 1;
        } else {
            plats[i].style.display = "none";
        }
    }

    // Message si aucun plat trouvé
    if (nombre == 0) {
        aucun.style.display = "block";
    } else {
        aucun.style.display = "none";
    }
}

// Clic sur un bouton de catégorie
for (var i = 0; i < boutons.length; i++) {
    boutons[i].onclick = function () {
        for (var j = 0; j < boutons.length; j++) {
            boutons[j].classList.remove("actif");
        }
        this.classList.add("actif");
        categorie = this.dataset.categorie;
        afficher();
    };
}

// Quand on écrit dans la barre de recherche
recherche.oninput = afficher;
