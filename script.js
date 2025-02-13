//your JS code here. If required.
document.getElementById("fname").onblur = function() {
    this.value = this.value.toUpperCase();
};

const val = document.getElementById("fname")

val.addEventListener("blur" , ()=>{
	let val = input.value;
	input.value =val.toUpperCase();
	
})