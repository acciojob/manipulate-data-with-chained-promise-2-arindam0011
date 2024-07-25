let input = prompt("Give an array:");

if (input) {
    input = input.replace(/[[]\s]/g, "");

    const output = document.getElementById("output");
    let arr = input.split(',').map(val => parseInt(val, 10));
    let even = arr.filter(val => val % 2 === 0);
    let mul = even.map(val => val * 2);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            output.innerText = even.join(',');
            resolve(mul);
        }, 3000);
    });

    promise.then((mul) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                output.innerText = mul.join(',');
                resolve();
            }, 2000);
        });
    });
}
