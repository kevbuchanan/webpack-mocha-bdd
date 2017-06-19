const expect = require('chai').expect;
const hello = require('../../src/hello/helloWorld').hello;

describe('hello', function() {
  it('returns Hello World', function() {
    expect(hello()).to.eq('Hello World');
  });
});
