import { expect } from 'chai';
import { hello } from '../../src/hello/helloWorld';

describe('hello', function() {
  it('returns Hello World', function() {
    expect(hello()).to.eq('Hello World');
  });
});
