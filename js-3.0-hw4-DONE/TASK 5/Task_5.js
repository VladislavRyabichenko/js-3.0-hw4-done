function Calculator(...rest) {
    this.numbers = rest;
    let operationResult = 0;

    this.add = function() {
        operationResult = this.numbers.reduce((acc, cur) => acc + cur);

        console.log(`Result of adding : ${operationResult}`)
        return operationResult;
    }

    this.sub = function() {
        operationResult = this.numbers.reduce((acc, cur) => acc - cur);

        console.log(`Result of subtracting : ${operationResult}`)
        return operationResult;
    }

    this.mult = function() {
        operationResult = this.numbers.reduce((acc, cur) => acc * cur);

        console.log(`Result of multiplying : ${operationResult}`)
        return operationResult;
    }

    this.div = function() {
        operationResult = this.numbers.reduce((acc, cur) => acc / cur);

        console.log(`Result of division : ${operationResult.toFixed(5)}`)
        return operationResult;
    }
}
let addTest = new Calculator(1,2,3,4,5);
addTest.add();
addTest.sub();
addTest.mult();
addTest.div();
