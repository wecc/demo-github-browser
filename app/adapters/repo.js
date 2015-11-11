import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindRecord(id/*, modelName, snapshot*/) {
    let host = this.get('host');
    let url = `${host}/repos/${id}`;
    return url;
  },

  urlForQuery(/*query, modelName*/) {
    let host = this.get('host');
    let url = `${host}/search/repositories?sort=stars&order=desc`;
    return url;
  }
});
