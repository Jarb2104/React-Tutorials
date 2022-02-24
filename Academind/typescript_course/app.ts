type Combi = string | number;

function combine(input1: Combi, input2: Combi, manageResult: string) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || manageResult === 'as-number')
    {
        return +input1 + +input2;
    }else
    {
        return input1.toString() + input2.toString();
    }
}

const number1 = 5;
const number2 = 2.4;
const result = combine(number1, number2, 'as-number');

console.log(result);

export default combine;