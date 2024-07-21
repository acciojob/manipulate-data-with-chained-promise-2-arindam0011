let input = prompt("Give an array:");
input = input.replace(/[\[\]\s]/g, ""); // Remove brackets and spaces

// Split input string into an array of numbers
let arr = input.split(',').map(val => parseInt(val, 10)); // Ensure elements are integers

// Get the output element
const output = document.getElementById("output");

// Filter and process arrays
setTimeout(() => {
    // Filter odd numbers
    let odd = arr.filter(val => val % 2 !== 0);
    // Display odd numbers after 1 second
    output.innerText = `${odd.join(', ')}`;
    
    // Delay for 1 second before processing even number
    setTimeout(() => {
        // Multiply even numbers by 2
        let even = arr.filter(val => val % 2 === 0).map(val => val * 2);
        // Display even numbers after 2 seconds from the start
        output.innerText += `${even.join(', ')}`;
    }, 1000); // Delay 1 second for even numbers
}, 1000);