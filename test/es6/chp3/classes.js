import { Foo } from './foo-class';

describe('classes', () => {
  const f = new Foo(5, 15);

  it('can instantiate an object from a class', () => {
    expect(f.gimmeXY()).to.equal(75);
  });
});
