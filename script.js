let input = prompt("Give an array:");

if(input){
input = input.replace(/[\[\]\s]/g, "");

let arr = input.split(',').map(val => parseInt(val, 10)); 
let even= arr.filter((val)=> val%2==0);

const output = document.getElementById("output");


let promise=new Promise((resolve, reject)=>{
	resolve(even);
});
promise
.then((even)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		output.innerText=even;
		let mul=even.map(val => val * 2);
		resolve(mul);
	},1000)
});
})
.then((mul)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		output.innerText+=","+mul;
			resolve();
	},2000)
	});
})
}
 