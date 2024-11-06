function calculateAverage(x, y) {
    return (x + y) / 2;
}

function main() {
    const x = parseInt(prompt("Enter X: "));
    const y = parseInt(prompt("Enter Y: "));

    if (isNaN(x) || isNaN(y)) {
        console.log("Please enter valid integers.");
        return;
    }

    const average = calculateAverage(x, y);
    console.log(`AVERAGE: ${average.toFixed(2)}`);
}

main();