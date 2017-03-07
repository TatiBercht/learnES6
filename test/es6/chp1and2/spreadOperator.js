function foo(x,y,z) {
  return x + y + z;
}

describe('spread operator', () => {
  describe('function calls ...', () => {
    let res = foo(...[1,2,3]);

    it('pass a function an array using ...', () => {
      expect(res).to.equal(6);
    });
  });

  describe('variables', () => {
    let a = [1,2,3];
    let b = ['a', ...a, 'b'];

    function foo(...args) {
      return args;
    }

    it('will expand an array passed into a function to an array', () => {
      expect(foo(1,2,3,4,5)).to.deep.equal([ 1, 2, 3, 4, 5 ]);
    });

    it('will expand an array into another', () => {
      expect(b).to.deep.equal([ 'a', 1, 2, 3, 'b' ]);
    });
  });

  describe('the opposite - gathering', () => {
    function gather(x, y, ...z) {
      return { x, y, z};
    }

    it('gather ... -> into an array', () => {
      expect(gather(1,2,3,4,5)).to.deep.equal({ x: 1, y: 2, z: [ 3, 4, 5 ] });
    });
  });
});

