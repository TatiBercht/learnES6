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
