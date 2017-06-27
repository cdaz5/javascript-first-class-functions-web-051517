function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function hello() {
    console.log("hello")
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log("hello")
}
