import Route from '@ember/routing/route';

export default class InboxRoute extends Route {
  model() {
    return this.store.findAll('message');
  }
}
