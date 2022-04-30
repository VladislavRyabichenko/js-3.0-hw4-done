// TASK 2
function flatWhite(arr) {
    let resultArr = [];

    for ( let elem of arr) {
        // если елемент является массивом,
        // то рекурентно вызывается функция для обхода этого елемента
        if (Array.isArray(elem)) {
            resultArr = resultArr.concat(flatWhite(elem));
        } else {
            resultArr.push(elem);
        }
    }
    return resultArr;
}
const arr = [[[1,2,3]],4,[5],6,[7,[8]]]
console.log(flatWhite(arr))
