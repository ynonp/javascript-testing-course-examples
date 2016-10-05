import SecretAgent from 'secret-agent';

export default class HelloWorld {
  msg() {
    return SecretAgent.password;
  }
}

