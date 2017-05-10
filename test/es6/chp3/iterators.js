describe('Array Iterators', () => {
  const arr = [1, 2, 3];
  const itSymbol = arr[Symbol.iterator]();

  it('Symbol.iterator first .next() function', () => {
    expect(itSymbol.next()).to.deep.equal({ value: 1, done: false });
  });

  it('Symbol.iterator second .next() function', () => {
    expect(itSymbol.next()).to.deep.equal({ value: 2, done: false });
  });

  it('Symbol.iterator last .next() function', () => {
    expect(itSymbol.next()).to.deep.equal({ value: 3, done: false });
  });

  it('Symbol.iterator final .next() function', () => {
    expect(itSymbol.next()).to.deep.equal({ value: undefined, done: true });
  });
});

describe('Map Iterators', () => {
  const m = new Map();

  m.set('foo', 42);
  m.set({ cool: true }, 'hello world');

  const it1 = m[Symbol.iterator]();

  it('Symbol.iterator first .next() function', () => {
    expect(it1.next()).to.deep.equal({ value: ['foo', 42], done: false });
  });

  it('Symbol.iterator second .next() function', () => {
    expect(it1.next()).to.deep.equal({ value: [{ cool: true }, 'hello world'], done: false });
  });

  it('Symbol.iterator final .next() function', () => {
    expect(it1.next()).to.deep.equal({ value: undefined, done: true });
  });
});
