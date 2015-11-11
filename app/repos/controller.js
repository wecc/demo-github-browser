import Ember from 'ember';

export default Ember.Controller.extend({
  repos: Ember.computed.alias('model')
});
