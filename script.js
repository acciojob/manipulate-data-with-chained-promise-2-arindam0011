let input = prompt("Give an array:");

if(input){
    input = input.replace(/[\[\]\s]/g, "");
    let arr = input.split(',').map(val => parseInt(val, 10)); 
    const output = document.getElementById("output");

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let even = arr.filter((val) => val % 2 == 0);
            output.innerText = even.join(',');
            let mul = even.map(val => val * 2);
            resolve(mul);
        }, 1000); // Adjusted the timing here
    });

    promise.then((mul) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                output.innerText = mul.join(',');
                resolve();
            }, 2000) // And here
        });
    })
}