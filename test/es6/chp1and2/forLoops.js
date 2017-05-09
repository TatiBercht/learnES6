describe('for...of loops', () => {
  it('`for..in` loops over the keys/indexes in the `a` array, while `for..of` loops over the values in `a`.', () => {
    const a = ['a', 'b', 'c', 'd', 'e'];

    for (const idx in a) { // eslint-disable-line guard-for-in
      console.log(idx); // eslint-disable-line no-console
    }

    for (const val of a) {
      console.log(val); // eslint-disable-line no-console
    }
  });

  it('example 2', () => {
    for (const c of 'hello') {
      console.log(c); // eslint-disable-line no-console
    }
  });
});
