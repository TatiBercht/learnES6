describe.only('for...of loops', () => {
  it('`for..in` loops over the keys/indexes in the `a` array, while `for..of` loops over the values in `a`.', () => {
    var a = ["a","b","c","d","e"];

    for (var idx in a) {
      console.log( idx );
    }

    for (var val of a) {
      console.log( val );
    }
  });
});
