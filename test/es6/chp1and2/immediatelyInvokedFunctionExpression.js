describe('IIFE immediately invoked function expressions', () => {
  let a = 2;
  let iife;

  (function IIFE(){
    let a = 3;
    iife = a;
  })();

  it('iife var is independent of outer scoped var', () => {
    expect(iife).to.equal(3);
    expect(a).to.equal(2);
  });
});
