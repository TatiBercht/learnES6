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
    let result;

    function foo(x = 11, y = 31) {
      return x + y;
    }

    it('foo() == 42', () => {
      result = foo();
      expect(result).to.equal(42);
    });

    it('foo(5, 6) == 11', () => {
      result = foo(5, 6);
      expect(result).to.equal(11);
    });

    it('foo(0, 42) == 42', () => {
      expect(foo(0, 42)).to.equal(42);
    });

    it('foo(5) == 36', () => {
      expect(foo(5)).to.equal(36);
    });

    it('foo(5, undefined) == 36', () => {
      expect(foo(5, undefined)).to.equal(36);
    });

    it('foo(5, null) == 5', () => {
      expect(foo(5, null)).to.equal(5);
    });

    it('foo(null, 5) == 5', () => {
      expect(foo(null, 5)).to.equal(5);
    });

    it('foo(undefined, 5) == 16', () => {
      expect(foo(undefined, 5)).to.equal(16);
    });
  });

  describe('immediately executed functions', () => {
    function myFunc(v) {
      return v + 11;
    }

    // let myFunc = (v) => {
    //   return v + 11;
    // };

    function foo(x = myFunc(31)) {
      return x * 2;
    }

    it('myFunc(31) = 42', () => {
      expect(myFunc(31)).to.equal(42);
    });

    it('foo() == 84', () => {
      expect(foo()).to.equal(84);
    });

    it('foo(10) == 20', () => {
      expect(foo(10)).to.equal(20);
    });
  });

  describe('more functions', () => {
    function myFunc(x) {
      return 2 * x;
    }

    it('myFunc(2) == 4', () => {
      expect(myFunc(2)).to.equal(4);
    });

    it('myFunc() isNaN', () => {
      expect(myFunc()).isNaN; // eslint-disable-line no-unused-expressions
    });
  });
});
