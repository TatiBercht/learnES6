/* eslint-disable */
describe('collections', () => {
  it('examples', () => {
    var buf = new ArrayBuffer( 32 );
    console.log(buf.byteLength);

    var arr = new Uint16Array( buf );
    console.log(arr.length);

    var littleEndian = (function() {
      var buffer = new ArrayBuffer( 2 );
      new DataView( buffer ).setInt16( 0, 256, true );
      return new Int16Array( buffer )[0] === 256;
    })();

    console.log('littleEndian = ' + littleEndian);
  });

  it('multiple views', () => {
    var buf = new ArrayBuffer( 2 );
    var view8 = new Uint8Array( buf );
    var view16 = new Uint16Array( buf );

    view16[0] = 3085;
    console.log(view8[0]);
    console.log(view8[1]);

    view8[0].toString( 16 );
    view8[1].toString( 16 );

    var tmp = view8[0];
    view8[0] = view8[1];
    view8[1] = tmp;

    console.log(view16[0]);

    // var first = new Uint16Array( buf, 0, 2 )[0];
    // var second = new Uint8Array( buf, 2, 1 )[0];
    // var third = new Uint8Array( buf, 3, 1 )[0];
    // var fourth = new Float32Array( buf, 4, 4 )[0];
    //
    // console.log(first);
    // console.log(second);
    // console.log(third);
    // console.log(fourth);
  });
});
