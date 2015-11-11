import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  commit: null,

  actions: {
    clickedSha() {
      let sha = this.get('commit.sha');
      this.attrs['on-clicked'](sha);
    }
  }
});
