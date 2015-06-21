import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('project', this.paramsFor('project').id);
  },

  setupController: function (controller, model) {
    controller.set('attrs.project', model);
  }
});
