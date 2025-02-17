//Changing stack order using setTimeout

function countPrimeNumbers() {
	let total_number = 0;
    const isPrime = new Array(101).fill(true); // Crée un tableau de booléens initialisés à true

    // 0 et 1 ne sont pas premiers
    isPrime[0] = false;
    isPrime[1] = false;

    // Trouve les nombres premiers en utilisant le crible d'Eratosthène
    for (let i = 2; i <= 100; i++) {
        if (isPrime[i]) {
            total_number += 1; // Ajoute 1 au compteur des nombres premiers
            // Marque tous les multiples du nombre courant comme non premiers
            for (let j = i * i; j <= 100; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return total_number;
}
const startTime = performance.now();
for (let i = 0; i < 100; i++) {
	setTimeout (countPrimeNumbers, 0);
}
const endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
