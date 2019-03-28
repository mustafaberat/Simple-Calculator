
document.form.output.value=""; //Empty for beggining

function writeForm(number){
	document.form.output.value = document.form.output.value + number;
}

function equal(){
	var exp = document.form.output.value;
	if (exp) {
		document.form.output.value = eval(exp);
	}
}	

function clearAll(){
	document.form.output.value=""; //Empty 
}

function back(){
	var exp = document.form.output.value;
	document.form.output.value = exp.substring(0,exp.length-1);

}

