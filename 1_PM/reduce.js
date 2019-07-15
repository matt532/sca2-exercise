// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].reduce(sum, 0) === 22

const arr = [0, 4, 3, 6, 9];

const sum = (acc, cur) => {
    acc += cur;
    return acc;
};

//Array.prototype.reduce = function(fun, init) {};

const total = arr.reduce(sum, 0);
console.log(total);
