const calculateEngravingPrice = (message = " ", pricePerWord = 0) => message.split(' ').length * pricePerWord;

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
console.log(calculateEngravingPrice('Uno', 100));


// const countPrice = function (str, price) {

//     console.log(str.split(' ').length * price);

// }

// countPrice('Hello, world', 50);


// const calculatePrice = function (str, price) {
//     console.log(str.split(' ').length * price);

// }

// calculatePrice('the price depends on the length of this string', 35)