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
  gimmeXY() {
    return super.gimmeXY() -1;
  }
}
