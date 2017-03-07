// function foo() {
//   return [1,2,3];
// }
//
// Destructuring 1
//
// var o1 = { a: 1, b: 2, c: 3 },
//   a2 = [];
//
// ( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
//
// console.log( a2 );					// [1,2,3]
//
//
// Destructuring 2
//
// var aa = 10, bb = 20;
//
// var o = { x: aa, y: bb };
// var     { x: AA, y: BB } = o;
//
// console.log( AA, BB );				// 10 20
//
//
// Destructuring 3
//
// var a, b, c, x, y, z;
//
// [a,b,c] = foo();
// ( { x, y, z } = bar() );
//
// console.log( a, b, c );				// 1 2 3
// console.log( x, y, z );				// 4 5 6
//
// Destructuring 4
//
// var a1 = [ 1, 2, 3 ],
//   a2 = [];
//
// [ a2[2], a2[0], a2[1] ] = a1;
//
// console.log( a2 );					// [2,3,1]
//
//
// You can even solve the traditional "swap two variables" task without a temporary variable:
//
//   ```js
// var x = 10, y = 20;
//
// [ y, x ] = [ x, y ];
//
// console.log( x, y );				// 20 10
