import HelloWorld from '04-hello-world';

describe('testin hello world', function() {
  it('should return hello world msg', function() {
    HelloWorld.__Rewire__('SecretAgent', { password: 'Hello World!' });
    const h = new HelloWorld();

    expect(h.msg()).toEqual('Hello World!');
    // expect(true).toBeTrue;

    HelloWorld.__ResetDependency__('SecretAgent');
  });
});
