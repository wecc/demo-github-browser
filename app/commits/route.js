import Ember from 'ember';

export default Ember.Route.extend({
  model({ owner, name }) {
    let repoId = `${owner}/${name}`;

    return this.store.findRecord('repo', repoId).then((repo) => {
      return repo.get('commits');
    });
  }
});
