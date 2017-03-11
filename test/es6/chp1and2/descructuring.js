function foo() {
  return [1, 2, 3];
}

describe('destructuring', () => {
  describe('destructuring 1', () => {
    const o1 = { a: 1, b: 2, c: 3 };
    const a2 = [];

    ({ a: a2[0], b: a2[1], c: a2[2] } = o1);

    it('works', () => {
      expect(a2).to.deep.equal([1, 2, 3]);
    });
  });

  describe('destructuring 2', () => {
    const aa = 10;
    const bb = 20;
    const o = { x: aa, y: bb };
    const { x: AA, y: BB } = o;

    it('works', () => {
      expect(AA).to.equal(10);
      expect(BB).to.equal(20);
    });
  });

  describe('destructuring 3', () => {
    const [a, b, c] = foo();

    it('works', () => {
      expect(a).to.equal(1);
      expect(b).to.equal(2);
      expect(c).to.equal(3);
    });
  });

  describe('destructuring 4', () => {
    const a1 = [1, 2, 3];
    const a2 = [];

    [a2[2], a2[0], a2[1]] = a1;

    it('works', () => {
      expect(a2).to.deep.equal([2, 3, 1]);
    });
  });

  describe('destructuring 5 - swap 2 variables', () => {
    let x = 10;
    let y = 20;

    [y, x] = [x, y];

    it('works', () => {
      expect(x).to.equal(20);
      expect(y).to.equal(10);
    });
  });

  describe('destructuring 6', () => {
    const { a: X, a: Y } = { a: 1 };

    it('works', () => {
      expect(X).to.equal(1);
      expect(Y).to.equal(1);
    });
  });

  describe('destructuring 7', () => {
    const { a: { x: X, x: Y }, a } = { a: { x: 1 } };

    it('works', () => {
      expect(X).to.equal(1);
      expect(Y).to.equal(1);
      expect(a).to.deep.equal({ 'x': 1 }); // eslint-disable-line quote-props
    });
  });
});
