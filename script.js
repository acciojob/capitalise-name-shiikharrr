//your JS code here. If required.
const input = document.getElementById('fname');
if (input){
	input.addEventListener('blur', function(){
		this.value = this.value.toUpperCase();
	});
}