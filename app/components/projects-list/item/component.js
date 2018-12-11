import Component from '@ember/component';
import { inject as service } from '@ember/service';

import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),

  tagName: '',

  showModal: false,
  newUser: null,

  save: task(function* (model) {
    yield model.save();
    this.set('project.user', model);
    this.set('showModal', false);
  }).drop(),

  actions: {
    onCreate() {
      this.setProperties({ showModal: true, newUser: this.store.createRecord('user') });
    }
  }
});
