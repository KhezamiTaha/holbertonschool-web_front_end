// Function to count the number of prime numbers between 2 and 100
function countPrimeNumbers() {
    let count = 0;

    for (let number = 2; number <= 100; number++) {
        let isPrime = true;

        for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
            if (number % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}

// Measure execution time
const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
