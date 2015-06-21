import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

  sortedProjects: function () {
    return this.get('attrs.projects').sortBy('orderDesc');
  }.property('attrs.projects'),

  actions: {
    addProject: function () {
      var self = this,
          newProject = this.store.createRecord('project', {
        name: 'New Project',
        description: '',
        url: '',
        image: '',
        order: 100
      });

      newProject.save().then(function () {
        self.transitionTo('project.edit', newProject);
      }, function (err) {
        console.log(err.errors);
      });
    }
  }
});
