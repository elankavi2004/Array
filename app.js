let numbers = [];

function getArray() {
    const input = document.getElementById("arrayInput").value;
    numbers = input.split(",")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));
}

function displayResult(text) {
    document.getElementById("result").innerText = text;
}

function sortArray() {
    getArray();
    displayResult("Ascending Sorted: " + numbers.sort((a, b) => a - b));
}

function findEven() {
    getArray();
    displayResult("Even Numbers: " + numbers.filter(num => num % 2 === 0));
}

function findPrimes() {
    getArray();
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    displayResult("Prime Numbers: " + numbers.filter(isPrime));
}

function Reverse() {
    getArray();
    displayResult("Reversed: " + numbers.reverse());
}

function findOdds() {
    getArray();
    displayResult("Odd Numbers: " + numbers.filter(num => num % 2 !== 0));
}

function findMax() {
    getArray();
    displayResult("Max Value: " + Math.max(...numbers));
}

function findMin() {
    getArray();
    displayResult("Min Value: " + Math.min(...numbers));
}

function Sum() {
    getArray();
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    displayResult("Sum: " + sum);
}

function Average() {
    getArray();
    const avg = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
    displayResult("Average: " + avg);
}

function findDuplicates() {
    getArray();
    const duplicates = numbers.filter((item, index) => numbers.indexOf(item) !== index);
    const uniqueDuplicates = [...new Set(duplicates)];
    displayResult("Duplicates: " + uniqueDuplicates);
}

function findMedian() {
    getArray();
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
    displayResult("Median: " + median);
}

function findMode() {
    getArray();
    const freq = {};
    numbers.forEach(num => freq[num] = (freq[num] || 0) + 1);
    let maxFreq = 0;
    let modes = [];
    for (const num in freq) {
        if (freq[num] > maxFreq) {
            modes = [num];
            maxFreq = freq[num];
        } else if (freq[num] === maxFreq) {
            modes.push(num);
        }
    }
    displayResult("Mode: " + modes.join(", "));
}

function SquareNumbers() {
    getArray();
    displayResult("Squared Numbers: " + numbers.map(num => num * num));
}

function factorial() {
    getArray();
    function fact(n) {
        if (n < 0) return NaN;
        return n === 0 ? 1 : n * fact(n - 1);
    }
    displayResult("Factorials: " + numbers.map(num => fact(Math.floor(num))));
}

function filterGreaterThanValue() {
    const value = parseFloat(prompt("Enter value to filter greater than:"));
    getArray();
    displayResult("Filtered > " + value + ": " + numbers.filter(num => num > value));
}
