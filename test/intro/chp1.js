describe('intro', () => {
  describe('statements', () => {
    let a = 20;
    let b = 2;
    let c = a * b;

    it('should calculate c to 40', () => {
      expect(c).to.equal(40);
    });
  });

  describe('unary operators', () => {
    describe('++', () => {
      let x = 5;
      let y = x++;
      let z = ++x;

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
      let y = x--;
      let z = --x;

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
});

/*

 function foo(x = 11, y = 31) {
 console.log( x + y );
 }

 foo();					// 42
 foo( 5, 6 );			// 11
 foo( 0, 42 );			// 42

 foo( 5 );				// 36
 foo( 5, undefined );	// 36 <-- `undefined` is missing
 foo( 5, null );			// 5  <-- null coerces to `0`

 foo( undefined, 6 );	// 17 <-- `undefined` is missing
 foo( null, 6 );			// 6  <-- null coerces to `0`







 function foo( x =
 (function(v){ return v + 11; })( 31 )
 ) {
 console.log( x );
 }

 foo();			// 42

 */
