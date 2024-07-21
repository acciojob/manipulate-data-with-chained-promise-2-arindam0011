//your JS code here. If required.
let input=prompt("Give an array:");
let arr= [];
	input.split(',').forEach(val=>arr.push(parseInt(val)));
let odd=[];
let even=[];

for(let i=0; i<arr.length; i++){
	if(arr[i]%2==0){
		even.push(arr[i]);
	}
	else if(arr[i]%2!=0){
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