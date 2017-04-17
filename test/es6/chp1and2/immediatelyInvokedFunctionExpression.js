describe('IIFE immediately invoked function expressions', () => {
  const a = 2;
  let x;

  (function IIFE() { // eslint-disable-line wrap-iife
    const a = 3; // eslint-disable-line no-shadow

    x = a;
  })();

  const myValue = ((y) => { // eslint-disable-line arrow-body-style
    return y * 2;
  })(3);

  function myFunc(y) {
    return y * 2;
  }

  const myValue2 = myFunc(3);

  it('iife var is independent of outer scoped var', () => {
    expect(x).to.equal(3);
    expect(a).to.equal(2);
  });

  it('returns 6', () => {
    expect(myValue2).to.equal(6);
  });

  it('return values can be assigned', () => {
    expect(myValue).to.equal(6);
  });
});
