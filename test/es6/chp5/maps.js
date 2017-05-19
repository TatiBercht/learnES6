/* eslint-disable */
describe('maps', () => {
  it('examples', () => {
    // var m = {};
    //
    // var x = { id: 1 },
    //   y = { id: 2 };
    //
    // m[x] = "foo";
    // m[y] = "bar";
    //
    // console.log(m[x]); // bar
    // console.log(m[y]); // bar

    var m = new Map();

    var x = { id: 1 },
      y = { id: 2 };

    m.set( x, "foo" );
    m.set( y, "bar" );

    console.log(m.get( x ));
    console.log(m.get( y ));

    var m2 = new Map( m.entries() ); // OR just `var m2 = new Map( m );`

    m.delete( y );

    console.log(m);

    m.clear();
    console.log(m.size);

    console.log(m2);
  });

  it('examples 2', () => {
    var x = { id: 1 }, y = { id: 2 };

    var m = new Map( [
      [ x, "foo" ],
      [ y, "bar" ]
    ] );

    console.log(m.get( x ));
    console.log(m.get( y ));
  });

  it('examples 3', () => {
    var m = new Map();

    var x = { id: 1 },
      y = { id: 2 };

    m.set( x, "foo" );
    m.set( y, "bar" );

    var vals = [ ...m.values() ];

    console.log(vals);
    console.log(Array.from( m.values() ));
  });
});
