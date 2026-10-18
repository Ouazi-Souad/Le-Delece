let formulaire = document.getElementById("formReservation");
let confirmation = document.getElementById("confirmation");

formulaire.onsubmit = function (e) {
    e.preventDefault(); // empêche le rechargement de la page

    // Récupérer les valeurs
    let nom = document.getElementById("nom").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let date = document.getElementById("date").value;
    let heure = document.getElementById("heure").value;
    let personnes = document.getElementById("personnes").value;

    let valide = true;

    // Vérification du nom
    if (nom.length < 3) {
        document.getElementById("erreur-nom").textContent = "Le nom doit avoir au moins 3 lettres.";
        valide = false;
    } else {
        document.getElementById("erreur-nom").textContent = "";
    }

    // Vérification du téléphone (10 chiffres)
    if (telephone.length != 10 || isNaN(telephone)) {
        document.getElementById("erreur-telephone").textContent = "Le téléphone doit contenir 10 chiffres.";
        valide = false;
    } else {
        document.getElementById("erreur-telephone").textContent = "";
    }

    // Vérification de la date
    if (date == "") {
        document.getElementById("erreur-date").textContent = "Choisissez une date.";
        valide = false;
    } else {
        document.getElementById("erreur-date").textContent = "";
    }

    // Vérification de l'heure
    if (heure == "") {
        document.getElementById("erreur-heure").textContent = "Choisissez une heure.";
        valide = false;
    } else {
        document.getElementById("erreur-heure").textContent = "";
    }

    // Vérification du nombre de personnes
    if (personnes < 1 || personnes > 12) {
        document.getElementById("erreur-personnes").textContent = "Entrez un nombre entre 1 et 12.";
        valide = false;
    } else {
        document.getElementById("erreur-personnes").textContent = "";
    }

    // Si tout est bon : simulation de la réservation
    if (valide == true) {
        confirmation.hidden = false;
        confirmation.innerHTML =
            "<h4>Réservation confirmée !</h4>" +
            "<p>Merci " + nom + ", votre table pour " + personnes +
            " personne(s) est réservée le " + date + " à " + heure + ".</p>";

        formulaire.reset(); // vider le formulaire
    } else {
        confirmation.hidden = true;
    }
};