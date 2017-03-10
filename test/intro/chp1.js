/* eslint no-unused-vars: 0 */

describe('intro', () => {
  describe('statements', () => {
    const a = 20;
    const b = 2;
    const c = a * b;

    it('should calculate c to 40', () => {
      expect(c).to.equal(40);
    });
  });

  describe('unary operators', () => {
    describe('++', () => {
      let x = 5;
      const y = x++;
      const z = ++x;

      it('x = 7', () => {
        expect(x).to.equal(7);
      });

      it('y = 5', () => {
        expect(y).to.equal(5);
      });

      it('z = 7', () => {
        expect(z).to.equal(7);
      });
    });

    describe('--', () => {
      let x = 5;
      const y = x--;
      const z = --x;

      it('x = 3', () => {
        expect(x).to.equal(3);
      });

      it('y = 5', () => {
        expect(y).to.equal(5);
      });

      it('z = 3', () => {
        expect(z).to.equal(3);
      });
    });
  });

  describe('function parameters', () => {
    function foo(x = 11, y = 31) {
      return x + y;
    }

    it('foo() == ?', () => {
      // expect(foo()).to.equal(?);
    });

    it('foo(5, 6) == ?', () => {
      // expect(foo(5, 6)).to.equal(?);
    });

    it('foo(0, 42) == ?', () => {
      // expect(foo(0, 42)).to.equal(?);
    });

    it('foo(5) == ?', () => {
      // expect(foo(5)).to.equal(?);
    });

    it('foo(5, undefined) == ?', () => {
      // expect(foo(5, undefined)).to.equal(?);
    });

    it('foo(5, null) == ?', () => {
      // expect(foo(5, null)).to.equal(?);
    });

    it('foo(null, 5) == ?', () => {
      // expect(foo(null, 5)).to.equal(?);
    });

    it('foo(undefined, 5) == ?', () => {
      // expect(foo(undefined, 5)).to.equal(?);
    });
  });

  describe('immediately executed functions', () => {
    function foo(x = (function (v) { // eslint-disable-line wrap-iife
      return v + 11;
    })(31)) {
      return x * 2;
    }

    it('foo() == ?', () => {
      // expect(foo()).to.equal(?);
    });
  });
});
