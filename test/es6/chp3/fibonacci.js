describe('Fibonacci sequence', () => {
  const Fib = {
    [Symbol.iterator]() {
      let n1 = 1;
      let n2 = 1;

      return {
        [Symbol.iterator]() {
          return this;
        },

        next() {
          const current = n2;

          n2 = n1;
          n1 += current;

          return { value: current, done: false };
        },

        return(v) {
          return {
            value: v, done: true,
          };
        },
      };
    },
  };

  it('Fib', () => {
    let finalValue;

    for (const n of Fib) {
      if (n > 50) {
        finalValue = n;
        break;
      }
    }

    expect(finalValue).to.equal(55);
  });
});
