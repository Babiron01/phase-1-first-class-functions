function receivesAFunction(callback){
  callback();
}
function returnsANamedFunction(){
  function namedFunction() {
    console.log(`Named function`);
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  function anonymousFunction() {
    console.log(`deeply satisfying`);
  }
  return anonymousFunction;
    
}



  