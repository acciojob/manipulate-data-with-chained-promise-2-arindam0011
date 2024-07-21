//your JS code here. If required.
let input=prompt("Give an array:");
input = input.replace(/[\[\]\ \,]/g, "");

console.log(input);
let arr= input.split('');
let odd=[];
let even=[];

for(let i=0; i<arr.length; i++){
if(arr[i]%2==0){
		even.push(arr[i]);
	}
	else{
		odd.push(arr[i]);
	}
	
}
const output=document.getElementById("output");
setTimeout(()=>{
	output.innerText=odd;
}, 1000);
setTimeout(()=>{
	output.innerText=even;
}, 2000)