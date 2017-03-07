describe('arrays', () => {
  let xs = [1,2,3,4,5];
  let x = xs.shift();

  it('shift return the head of an array', () => {
    expect(x).to.deep.equal(1);
  });

  it('shift removes the head of the array', () => {
    expect(xs).to.deep.equal([2,3,4,5]);
  });
});
