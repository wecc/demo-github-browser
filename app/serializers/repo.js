import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalize(modelClass, resourceHash) {
    let data = {};

    data.name = resourceHash.name;
    data.owner = resourceHash.owner.login;

    data.id = `${data.owner}/${data.name}`;

    data.links = {
      commits: `${resourceHash.url}/commits`
    };

    return this._super(modelClass, data);
  },

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.items, id, requestType);
  }
});
