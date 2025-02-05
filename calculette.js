/**
 * Calcule le résultat de l'opération entre deux valeurs.
 * @param {number} val1 - La première valeur.
 * @param {number} val2 - La deuxième valeur.
 * @param {string} operateur - L'opérateur (+, -, *, /, %, **).
 * @returns {number} Le résultat de l'opération.
 * @throws {Error} Si les valeurs ne sont pas des nombres ou si l'opérateur est inconnu.
 */
function calculette(val1, val2, operateur) {
    if (typeof val1 !== 'number' || typeof val2 !== 'number') {
        throw Error("Les valeurs doivent être des nombres");
    }

    let resultat = 0;
    switch (operateur) {
        case '+':
            resultat = val1 + val2;
            break;
        case '-':
            resultat = val1 - val2;
            break;
        case '*':
            resultat = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                throw new Error("Division par zéro");
            }
            resultat = val1 / val2;
            break;
        case '%':
            resultat = val1 % val2;
            break;
        case '**':
            resultat = val1 ** val2;
            break;
        default:
            throw new Error(`Opérateur inconnu: ${operateur}`);
    }
    return resultat;
}


try {
    console.log(calculette(265, 37, '%')); 
    console.log(calculette(2, 3, 'art'));
} catch (error) {
    console.error(error.message);
}