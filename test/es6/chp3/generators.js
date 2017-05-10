describe('Generator functions *foo() { .. }', () => {
  function* foo() {
    while (true) { // eslint-disable-line no-constant-condition
      yield Math.random();
    }
  }

  it('random numbers', () => {
    expect(foo().next().value).to.be.above(0);
  });
});
