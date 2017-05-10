describe('Tasks sequence', () => {
  const tasks = {
    [Symbol.iterator]() {
      const steps = this.actions.slice();

      return {
        [Symbol.iterator]() {
          return this;
        },

        next(...args) {
          if (steps.length > 0) {
            const res = steps.shift()(...args);

            return {
              value: res, done: false,
            };
          }

          return {
            done: true,
          };
        },

        return(v) {
          steps.length = 0;

          return {
            value: v, done: true,
          };
        },
      };
    },
    actions: [],
  };

  tasks.actions.push(
    function add2(x) {
      return x + 2;
    },

    function add(x, y) {
      return x + y;
    },
  );

  const iterator = tasks[Symbol.iterator]();

  it('Tasks', () => {
    expect(iterator.next(10)).to.deep.equal({ value: 12, done: false });
  });

  it('Tasks', () => {
    expect(iterator.next(1, 2)).to.deep.equal({ value: 3, done: false });
  });

  it('Tasks', () => {
    expect(iterator.next()).to.deep.equal({ done: true });
  });
});
