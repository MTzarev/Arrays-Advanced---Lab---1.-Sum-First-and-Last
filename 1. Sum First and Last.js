function sumFirstAndLast(array) {
    let num1 = array.shift();
    let num2 = array.pop();
    let sum = Number(num1) + Number(num2);


    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);
//sumFirstAndLast(['5', '10']);