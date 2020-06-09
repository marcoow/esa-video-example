import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;

  async beforeModel(transition) {
    if (this.session.isAuthenticated) {
      await this.session.loadCurrentUser();
    }
  }
}
