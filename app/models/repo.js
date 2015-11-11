import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  owner: DS.attr('string'),

  commits: DS.hasMany('commit'),

  fullName: Ember.computed('name', 'owner', {
    get() {
      let { name, owner } = this.getProperties('name', 'owner');
      return `${name}/${owner}`;
    }
  })
});
