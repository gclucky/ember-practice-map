import DS from 'ember-data';
  var host='http://localhost:3000';
export default DS.JSONAPIAdapter.extend({

   host: host
});
