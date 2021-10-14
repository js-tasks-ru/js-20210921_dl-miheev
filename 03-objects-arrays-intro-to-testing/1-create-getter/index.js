/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

//короткий вариант
/*
let _ = require('lodash');

export function createGetter(path) {
    return function(obj){
        return _.get(obj, path); //раз уж в package-lock подключен lodash, почему бы не использовать :)
    }
}*/

//вариант без читов
export function createGetter(path) {
    return function(obj){
        const arr = path.split('.');
        for (let i = 0; i < arr.length; ++i) {
            const prop = arr[i];
            if (prop in obj) {
                obj = obj[prop];
            } else {
                return;
            }
        }
        return obj;
    }
}
