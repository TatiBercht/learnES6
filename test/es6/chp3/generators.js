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

describe('Generator eg 2', () => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }

  it('call generator', () => {
    for (const v of foo()) {
      console.log(v); // eslint-disable-line no-console
    }
  });
});
