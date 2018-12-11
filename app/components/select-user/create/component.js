import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: 'btn btn-block rounded-0 border-top text-primary',

  onCreate() {},

  click() {
    this.onCreate();
    this.select.actions.close();
  }
});
