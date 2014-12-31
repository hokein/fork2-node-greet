var expect = require("chai").expect;
var greet = require("../");

describe("greet", function() {
  it("should greet a person by name.", function() {
    expect("hello, foo").to.eq(greet("foo"));
  });
  it("should greet a person flirtatiously if drunk.", function() {
    var drunk = true;
    expect("hello foo, you look sexy today").to.eq(greet("foo", drunk));
  });
});
