import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
  },

  async authenticate(username, password) {
    let response = await fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    });

    if (response.ok) {
      return response.json();
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  },

  invalidate(data) {
  }
});
