/* eslint-disable */
describe('promises', () => {
  var p1 = Promise.resolve( 42 );
  var p2 = new Promise( function pr(resolve) {
    resolve( 42 );
  } );
  var v3 = 44;

  var p3 = Promise.reject( "Oops" );

  var p4 = new Promise( function pr(resolve,reject){
    setTimeout( function(){
      reject( "Oops" );
    }, 10 );
  } );

  it('examples', () => {
    console.log('simple resolved promise', p1);
    console.log('simple resolved promise', p2);
    console.log('simple rejected promise', p3);
    console.log('simple rejected promise', p4);

    Promise.all( [p1,p2,v3] )
      .then( function fulfilled(vals){
        console.log( vals );			// [42,43,44]
      } );

    Promise.all( [p1,p2,v3,p4] )
      .then(
        function fulfilled(vals){
          // never gets here
        },
        function rejected(reason){
          console.log('the reason is: ' + reason );		// Oops
        }
      );
  });

  it('examples 2', () => {
    Promise.race( [p2,p1,v3] )
      .then( function fulfilled(val){
        console.log('the value is ' + val );
      } );

    Promise.race( [p2,p4] )
      .then(
        function fulfilled(val){
          // never gets here
        },
        function rejected(reason){
          console.log('the reason is: ' + reason );		// Oops
        }
      );
  });
});
