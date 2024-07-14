const arr = [1,[2,[3,[4,[5]]]]];

var res = arr.flat(1);
console.log(res);   // [ 1, 2, [ 3, [ 4, [Array] ] ] ]

var res = arr.flat(2);
console.log(res);   // [ 1, 2, 3, [ 4, [ 5 ] ] ]

var res = arr.flat(Infinity);
console.log(res);   // [ 1, 2, 3, 4, 5 ]

var k = res.map((num) => {
    return num * 2;
});
console.log(k); // [ 2, 4, 6, 8, 10 ]



//  .flat(1) or .flat() behaves same as it is defalut.