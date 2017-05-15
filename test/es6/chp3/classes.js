import { Foo, Baa, Oops, Foo2, Bar2 } from './class-examples';

describe('simple classes', () => {
  const f = new Foo(5, 15);

  it('can instantiate an object from a class', () => {
    expect(f.gimmeXY()).to.equal(75);
  });
});

describe('class inheritance', () => {
  const b = new Baa(5, 15, 3);

  it('can instantiate an object from a child class', () => {
    expect(b.gimmeXYZ()).to.equal(225);
  });
});

describe.skip('class extending', () => {
  const ouch = new Oops('I messed up!');
  const throwIt = () => {
    throw ouch;
  };

  it('custom error class', () => {
    expect(throwIt()).to.throw('I messed up!');
  });
});

describe('class meta property', () => {
  const a = new Foo2(); // eslint-disable-line no-unused-vars
  const b = new Bar2();

  it('new.target is undefined', () => {
    expect(b.baz()).to.equal(undefined);
  });
});
