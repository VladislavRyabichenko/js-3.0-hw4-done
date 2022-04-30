function multiplyBy (...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((acc, cur) => acc * cur);
    }
    else {
        console.log("Amount of numbers must be more than 0")
        return false;
    }
}
console.log(multiplyBy(1,4,5));
console.log(multiplyBy(10,10,100));