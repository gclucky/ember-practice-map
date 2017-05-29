import Ember from 'ember';

export default Ember.Route.extend({
  fooBar: Ember.inject.service('foo-bar'),



  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      employees: this.store.findAll('employee')
    })
  }
});


































// // now model is no longer attached to user, it is a hash
// return Ember.RSVP.hash({
//   users: this.store.findAll('user'),
//   employees: this.store.findAll('employee')
// })
