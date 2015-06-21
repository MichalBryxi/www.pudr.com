import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  url: DS.attr(),
  image: DS.attr(),
  order: DS.attr('number'),

  orderDesc: function () {
    return 100 - this.get('order');
  }.property('order')
});
