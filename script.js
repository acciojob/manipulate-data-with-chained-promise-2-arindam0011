let arr = [1, 2, 3, 4]; // Hardcoded array
const output = document.getElementById("output");


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let even = arr.filter((val) => val % 2 == 0);
        output.innerText = even.join(',');
        let mul = even.map(val => val * 2);
        resolve(mul);
    }, 1000); // First promise resolves after 1 second
});

promise.then((mul) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerText = mul.join(',');
            resolve();
        }, 2000) // Second promise resolves after another 2 seconds
    })
})