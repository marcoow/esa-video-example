import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  @service session;

  @computed('session.data.authenticated.token')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['token'] = this.session.data.authenticated.token;
    }

    return headers;
  }
}
