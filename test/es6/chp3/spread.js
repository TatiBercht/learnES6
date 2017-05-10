describe('The `...` spread operator fully exhausts an iterator.', () => {
  const a = [1, 2, 3, 4, 5];

  function foo(x, y, z, w, p) {
    return x + y + z + w + p;
  }

  it('call foo(...a)', () => {
    expect(foo(...a)).to.equal(15);
  });
});

describe('Array destructuring', () => {
  const a = [1, 2, 3, 4, 5];
  const iterator = a[Symbol.iterator]();

  const [x, y] = iterator; // take just the first two elements from `it`
  const [z, ...w] = iterator; // take the third, then the rest all at once

  it('iterator is exhausted', () => {
    expect(iterator.next()).to.deep.equal({ value: undefined, done: true });
  });

  it('x = ?', () => {
    expect(x).to.equal(1);
  });

  it('y = ?', () => {
    expect(y).to.equal(2);
  });

  it('z = ?', () => {
    expect(z).to.equal(3);
  });

  it('w = ?', () => {
    expect(w).to.deep.equal([4, 5]);
  });
});
