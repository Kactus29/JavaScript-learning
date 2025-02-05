var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Générer un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function askQuestion() {
    rl.question('Devinez le nombre entre 1 et 100 : ', (answer) => {
        // Convertir la réponse en nombre
        var userNumber = parseInt(answer, 10);
        attempts++;

        // Vérifier si le nombre est valide
        if (isNaN(userNumber)) {
            console.log("Ce n'est pas un nombre valide.");
            askQuestion();
        } else {
            // Comparer le nombre de l'utilisateur avec le nombre aléatoire
            if (userNumber < randomNumber) {
                console.log("C'est plus !");
                askQuestion();
            } else if (userNumber > randomNumber) {
                console.log("C'est moins !");
                askQuestion();
            } else {
                console.log(`Bravo ! Vous avez trouvé le nombre ${randomNumber} en ${attempts} essais.`);
                rl.close();
            }
        }
    });
}

// Commencer le jeu
askQuestion();