import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('project', {path: '/project/:id'}, function () {
    this.route('edit');
    this.route('show');
  });
});

export default Router;
