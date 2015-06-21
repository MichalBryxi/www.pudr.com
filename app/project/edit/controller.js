import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

  actions: {
    updateProject: function () {
      var self = this;

      this.get('attrs.project').save().then(function () {
        self.transitionToRoute('projects');
      }, function (err) {
        console.log(err);
      });
    }
  }
});
