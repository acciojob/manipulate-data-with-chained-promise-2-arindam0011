//your JS code here. If required.
let input=prompt("Give an array:");
input = input.replace(/[\[\]\ \,]/g, "");


let arr= input.split('');

const output=document.getElementById("output");

setTimeout(()=>{
	
		setTimeout(()=>{
			let even= arr.filter(val=>val%2==0).map(eachVal=>eachVal*2);
					output.innerText=even;
			}, 2000);
	
	let odd= arr.filter(val=>val==1||val%2!=0)
	output.innerText=odd;
}, 1000)