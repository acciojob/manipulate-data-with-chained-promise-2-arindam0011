let input = prompt("Give an array:");

if(input){
input = input.replace(/[\[\]\s]/g, ""); // Remove brackets and spaces

// Split input string into an array of numbers
let arr = input.split(',').map(val => parseInt(val, 10)); // Ensure elements are integers
let even= arr.filter((val)=> val%2==0);

const output = document.getElementById("output");


let promise=new Promise((resolve, reject)=>{
	resolve(even);
});
promise
.then((even)=>{
	let mul= [];
	new Promise((resolve)=>{
		
	setTimeout(()=>{
		output.innerText=even;
		even.forEach((val)=>mul.push(val*2));
	},1000)
	
})
	return mul;
})
.then((mul)=>{
	new Promise((resolve)=>{
		setTimeout(()=>{
		output.innerText=mul;
	},2000)
	})
	
})


}