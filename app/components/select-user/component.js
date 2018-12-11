import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  tagName: '',

  options: null,

  onCreate() {},

  actions: {
    fetchOptions() {
      this.set('options', this.store.query('user', {}));
    },

    onCreate() {
      this.onCreate();
    }
  }
});
