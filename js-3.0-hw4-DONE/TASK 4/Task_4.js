function extendWithEndless(...objects) {
    let extendedObj = {};

    // проверка якляются ли аргументы обьектами
    for (let obj of objects) {
        if (toString.call(obj) !== "[object Object]") {
            console.log(`Error! Argument has type : ${toString.call(obj) }`);
            return false;
        }
    }

    let lastObj = objects.pop(); // берем последний елемент и удаляем с массива аргументов

    for (let property in lastObj) { // копируем свойста последннего переданного обьекта
        if (!extendedObj.hasOwnProperty(property)) {
            extendedObj[property] = lastObj[property];
        }
    }
    // цикл идет с конца
    // новые свойства будут иметь значение которые было в последнем переданом обьекте
    // который имеет данное свойство
    for (let i = objects.length - 1; i >= 0; i--) {
        let currentObj = objects[i];

        for (let property in currentObj) {
            if (!extendedObj.hasOwnProperty(property)) {
                extendedObj[property] = currentObj[property];
            }
        }
    }
    return extendedObj;
}
console.log("First example")
console.log(extendWithEndless(
    {first: true, ok: true},
    {first: 101, badRequest: false},
    {ok: false, badRequest: true},));

console.log("\nSecond example")
console.log(extendWithEndless(
    {first: true, ok: true},
    {first: 101, badRequest: false},
    {test1: 'obj3', test2: 'obj 3'},
    {test1: 'obj 4', test2: 'obj 4'},
    {ok: false, badRequest: true},));
