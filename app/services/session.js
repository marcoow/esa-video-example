import BaseSessionService from 'ember-simple-auth/services/session';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SessionService extends BaseSessionService {
  @tracked user;
  @service store;

  async handleAuthentication() {
    super.handleAuthentication(...arguments);

    await this.loadCurrentUser();
  }

  async loadCurrentUser() {
    let user = await this.store.queryRecord('user', { me: true });
    this.user = user;
  }
}