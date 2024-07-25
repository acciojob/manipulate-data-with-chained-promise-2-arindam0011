let input = prompt("Give an array:");

if (input) {
    // Clean up input and convert it to an array of numbers
    input = input.replace(/[[]\s]/g, "");
    const output = document.getElementById("output");
    let arr = input.split(',').map(val => parseInt(val, 10));

    // Function that returns a promise resolving with the array after 3 seconds
    let getNumbers = () => {
        return new Promise((resolve) => {
                resolve(arr);
          
        });
    };

    getNumbers()
        .then((arr) => {
            // Filter out odd numbers
            let evenNumbers = arr.filter(val => val % 2 === 0);
            return new Promise((resolve) => {
                setTimeout(() => {
                    output.innerText = evenNumbers.join(', ');
                    resolve(evenNumbers); // Pass even numbers for further processing
                }, 1000); // 1 second delay
            });
        })
        .then((evenNumbers) => {
            // Multiply even numbers by 2
            let multipliedNumbers = evenNumbers.map(val => val * 2);
            return new Promise((resolve) => {
                setTimeout(() => {
                    output.innerText = multipliedNumbers.join(', ');
                    resolve();
                }, 2000); // 2 seconds delay
            });
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}


