function extendWith(obj_1, obj_2) {
    let extendedObj = {};

    // копируем свойства первого обьекта (который приоритетный)
    for (let property in obj_1) {
        extendedObj[property] = obj_1[property];
    }
    // чтобы небыло перезаписи, со второго обьекта берем свойства
    // которых нету в первом обьекте
    for (let property in obj_2) {
        if(!extendedObj.hasOwnProperty(property)) {
            extendedObj[property] = obj_2[property];
        }
    }
    return extendedObj;
}
console.log(extendWith({one:true, ok: true}, {one: 11, badRequest: false}));