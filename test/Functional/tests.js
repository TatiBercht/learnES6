/* eslint no-unused-vars: 0 */
describe('functional tests', () => {
  const browsers = ['chrome', 'ie', 'firefox', 'safari'];
  const browsersVs = {
    'chrome': 56,
    'ie': 11,
    'firefox': 22,
    'safari': 14,
  };

  describe('tests', () => {
    it('simple map', () => {
      const xs = browsers.map(x => `Browser = ${x}`);

      expect(xs[0]).to.equal('Browser = chrome');
    });

    it('object keys map', () => {
      const xs = Object.keys(browsersVs);

      expect(xs).to.deep.equal(['chrome', 'ie', 'firefox', 'safari']);

      const xxs = xs.map(key => ({
        name: key,
        version: browsersVs[key],
      }));

      expect(xxs).to.deep.equal([
        { name: 'chrome', version: 56 },
        { name: 'ie', version: 11 },
        { name: 'firefox', version: 22 },
        { name: 'safari', version: 14 },
      ]);
    });

    it('reduce an array to a single object', () => {
      const xs = browsers.map(key => ({
        name: key,
        version: browsersVs[key],
      }));

      const res = xs.reduce(
        (hash, { name, version }) => {
          hash[name] = { version };

          return hash;
        },
        {}
      );

      expect(res).to.deep.equal({
        'chrome': {
          version: 56,
        },
        'firefox': {
          version: 22,
        },
        'ie': {
          version: 11,
        },
        'safari': {
          version: 14,
        },
      });
    });
  });
});
