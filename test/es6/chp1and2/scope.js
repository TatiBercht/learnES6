describe('scope', () => {
  let a = 2;
  let res;

  {
    let a = 3;
    res = a;
  }

  it('outer scope var is independent of inner scoped var', () => {
    expect(res).to.equal(3);
    expect(a).to.equal(2);
  });
});

describe('typeof behaviour with let and TDZ variables', () => {
  it('a is not declared and undefined', () => {
    expect(typeof a === "undefined").to.equal(true);
  });

  it('TDZ - Temporal Dead Zone - b is declared and undefined', () => {
    expect(typeof b === "undefined").to.equal(true);

    let b;
  });
});

describe('for loop scope', () => {
  let funcs = [];

  for (let i = 0; i < 5; i++) {
    funcs.push( function(){
      return i;
    } );
  }

  it('funcs 3 == 3', () => {
    expect(funcs[3]()).to.equal(3);
  });

  it('funcs 2 == 2', () => {
    expect(funcs[2]()).to.equal(2);
  });
});
