import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('project');
  },

  setupController: function (controller, model) {
    controller.set('attrs.projects', model);
  }
});
