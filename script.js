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
	new Promise((resolve)=>{
		let mul= [];
		
		setTimeout(()=>{
		output.innerText=even.join(,);
		even.forEach((val)=>mul.push(val*2));
		resolve(mul);
	},1000)
});
})
.then((mul)=>{
	new Promise((resolve)=>{
		setTimeout(()=>{
		output.innerText=mul.join(,);
			resolve();
	},2000)
	});
})
}
} 