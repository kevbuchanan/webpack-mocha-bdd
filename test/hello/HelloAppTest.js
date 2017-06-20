import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { HelloApp } from '../../src/hello/HelloApp';

describe('HelloApp', function() {
  let document = null;

  beforeEach(function() {
    const dom = new JSDOM('<html><body><div id="container"/></body></html>');
    document = dom.window.document;
  });

  it('renders hello in the container', function() {
    const container = document.getElementById("container");
    const helloService = {
      hello: () => "Hi",
    };
    const app = new HelloApp(container, helloService);
    app.start();

    expect(document.getElementById("container").innerHTML).to.eq("<h1>Hi</h1>");
  });
});
