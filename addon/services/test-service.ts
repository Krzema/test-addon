import Service from '@ember/service';

export default class TestService extends Service {
  testFunction(): string {
    return 'Hello test';
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'test-service': TestService;
  }
}
