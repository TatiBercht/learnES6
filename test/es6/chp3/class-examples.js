export class Foo {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  gimmeXY() {
    return this.x * this.y;
  }
}

export class Baa extends Foo {
  constructor(a, b, c) {
    super(a, b);
    this.z = c;
  }

  gimmeXYZ() {
    return super.gimmeXY() * this.z;
  }
}

export class Oops extends Error {
  constructor(reason) {
    super(reason);
    this.oops = reason;
  }
}

export class Foo2 {
  constructor() {
    console.log('Foo: ', new.target.name); // eslint-disable-line no-console
  }
}

export class Bar2 extends Foo {
  constructor() {
    super();
    console.log('Bar: ', new.target.name); // eslint-disable-line no-console
  }

  baz() {
    return new.target;
  }
}

export class FooWithStatic {
  static cool() {
    return 'cool';
  }

  wow() {
    return 'wow';
  }
}

export class BarWithStatic extends FooWithStatic {
  static awesome() {
    return `super, awesome ${super.cool()}`;
  }

  neat() {
    return `this is neat and also, ${super.wow()}!!!!`;
  }
}

export class MyCoolArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}
