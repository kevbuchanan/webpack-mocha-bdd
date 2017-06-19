var expect = require('chai').expect;
var hello = require('../../src/hello/helloWorld').hello;

describe('hello', function() {
  it('returns Hello World', function() {
    expect(hello()).to.eq('Hello World');
  });
});
