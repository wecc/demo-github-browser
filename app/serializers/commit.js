import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalize(modelClass, resourceHash) {
    let data = {};

    data.id = resourceHash.sha;
    data.sha = resourceHash.sha;
    data.message = resourceHash.commit.message;
    data.author = resourceHash.commit.author.name;

    return this._super(modelClass, data);
  }
});
