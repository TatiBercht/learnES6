describe('arrow function', () => {
  it('expect([1,2,3,4,5].map( v => v * 2 )).to.deep.equal([ 2, 4, 6, 8, 10 ]);', () => {
    expect([1,2,3,4,5].map( v => v * 2 )).to.deep.equal([ 2, 4, 6, 8, 10 ]);
  });
});
