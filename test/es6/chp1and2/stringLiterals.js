describe('string literals', () => {
  function foo(strings, ...values) {
    console.log( strings );
    console.log( values );
  }

  function bar() {
    return function foo(strings, ...values) {
      console.log( strings );
      console.log( values );
    }
  }

  it('example 1', () => {
    var desc = 'AWESOME';
    foo`Everything is ${desc} !!!`;
  });

  it('example 2', () => {
    var desc = "awesome";
    bar()`Everything is ${desc}!`;
  });

  it('example 3', () => {
    function tag(strings, ...values) {
      return strings.reduce( function(s,v,idx){
        return s + (idx > 0 ? values[idx-1] : "") + v;
      }, "" );
    }

    var desc = "awesome";

    var text = tag`Everything is ${desc}!`;

    console.log( text );
  });

  it('example 4', () => {
    console.log( String.raw`Hello\nWorld` );
  });
});
