/* eslint-disable */
describe('weak maps', () => {
  it('examples', () => {
    var m = new WeakMap();

    var x = { id: 1 },
      y = { id: 2 };

    m.set( x, "foo" );

    console.log(m.has( x ));
    console.log(m.has( y ));
  });
});

describe('sets', () => {
  it('examples', () => {
    var s = new Set();

    var x = { id: 1 },
      y = { id: 2 };

    s.add( x );
    s.add( y );
    s.add( x );
    console.log(s);

    console.log('size = ' + s.size);

    s.delete( y );
    console.log('size = ' + s.size);

    s.clear();
    console.log('size = ' + s.size);

    s.add( x ).add( y );

    var keys = [ ...s.keys() ],
      vals = [ ...s.values() ],
      entries = [ ...s.entries() ];

    console.log('keys', keys);
    console.log('vals', vals);
    console.log('entries', entries);

    keys[0] === x;
    keys[1] === y;

    vals[0] === x;
    vals[1] === y;

    entries[0][0] === x;
    entries[0][1] === x;
    entries[1][0] === y;
    entries[1][1] === y;
  });
});
