export class HelloApp {
  constructor(container, helloService) {
    this.container = container;
    this.helloService = helloService;
  }

  start() {
    this.container.innerHTML = (
      `<h1>${this.helloService.hello()}</h1>`
    );
  }
}
