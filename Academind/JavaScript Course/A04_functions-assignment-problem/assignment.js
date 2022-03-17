const sayHello01 = (name) => console.log('Hi ' + name);
const sayHello02 = (phrase, name) => console.log(phrase + name);
const sayHello03 = () => console.log('phrase + name');
const sayHello04 = (phrase = 'dada ', name) => phrase + name;

sayHello01('Alejandro');
sayHello02('Hello ', 'Jarb');
sayHello03('Hello ', 'Jarb');
console.log(sayHello04('fourht is ', 'the not charm'));
console.log(sayHello04(undefined, 'the not charm'));

function checkInput(cbFunction, ...listStrings) {
	if (listStrings !== undefined && listStrings.length > 0) {
		cbFunction(listStrings);
	} else {
		cbFunction('Wrong array, check again');
	}
}

checkInput((prSomeBar) => console.log(prSomeBar), ['sad', 'happy', 'other']);
checkInput((prSomeBar) => console.log(prSomeBar));
checkInput((prSomeBar) => console.log(prSomeBar), []);
