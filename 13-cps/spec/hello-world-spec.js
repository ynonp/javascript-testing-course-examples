import HelloWorld from 'hello-world';

describe('testin hello world', function() {
  it('should return hello world msg', function() {
    const h = new HelloWorld();
    expect(h.msg()).toEqual('Hello World!');
  });
});
