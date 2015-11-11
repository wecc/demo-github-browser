import Ember from 'ember';

export default Ember.Controller.extend({
  commits: Ember.computed.alias('model')

  // actions: {
  //   doSomething(sha) {
  //     this.set('currentSha', sha);
  //   }
  // }
});
