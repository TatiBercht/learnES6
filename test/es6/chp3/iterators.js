describe.only('Iterators', () => {
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
