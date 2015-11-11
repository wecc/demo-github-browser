import DS from 'ember-data';

export default DS.Model.extend({
  sha: DS.attr('string'),
  message: DS.attr('string'),
  author: DS.attr('string'),

  repo: DS.belongsTo('repo')
});
