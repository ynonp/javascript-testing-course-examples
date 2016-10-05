export default class HelloWorld {
  msg() {
    if (this.name) {
      return `Hello! my name is ${this.name}`;
    }
    else {
      return 'Hello World!';
    }
  }

  setName(name) {
    this.name = name;
  }
}

