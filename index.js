'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}
//オブジェクト追加時の , 付け忘れは注意
module.exports = {
    add: add,
    multi : multi
};
