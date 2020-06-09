import ApplicationAdapter from './application';

export default class UsersAdapter extends ApplicationAdapter {
  buildURL(modelName, id, snapshot, requestType, query) {
    if (requestType === 'queryRecord' && query.me) {
      return [this.namespace, this.pathForType(modelName), 'me'].join('/');
    } else {
      return super.buildURL(...arguments);
    }
  }
}
