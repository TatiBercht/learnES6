import { Foo, Baa } from './class-examples';

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
