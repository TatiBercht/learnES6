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

describe('Generator eg 3', () => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }

  const iterator = foo();

  it('first call to generator', () => {
    expect(iterator.next()).to.deep.equal({ value: 1, done: false });
  });

  it('second call to generator', () => {
    expect(iterator.next()).to.deep.equal({ value: 2, done: false });
  });

  it('third call to generator', () => {
    expect(iterator.next()).to.deep.equal({ value: 3, done: false });
  });

  it('last call to generator', () => {
    expect(iterator.next()).to.deep.equal({ value: undefined, done: true });
  });
});
