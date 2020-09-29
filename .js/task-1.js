
const getItemsString = function (array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        const elNumber = i + 1;
        result += `${elNumber} - ${array[i]}\n`;

    }
    return result
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(getItemsString([5, 10, 15]));

