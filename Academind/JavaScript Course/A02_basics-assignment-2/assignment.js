const task3Element = document.getElementById('task-3');

function showAlert() {
	alert('some text of your choice');
}

function showAlertWithName(name) {
	alert(name);
}

function concatenateThreeStrings(par1, par2, par3) {
	return par1 + par2 + par3;
}

task3Element.addEventListener('click', showAlert);

showAlert();
showAlertWithName('Alejandro');
const result = concatenateThreeStrings('My name is what, ', 'my name is who? ', 'my name is slim shady');
alert(result);
