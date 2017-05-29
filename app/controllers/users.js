import Ember from 'ember';
const {
  Controller,
  computed: { alias, union, mapBy, uniq, intersect, max, min, sum }
} = Ember;
export default Controller.extend({
  fooBar: Ember.inject.service('foo-bar'),
  actions: {
    setTheThing() {
      console.log('we are setting')
      let fooBar = Ember.get(this, 'fooBar');
      fooBar.setProperty('monkey');
    }
  },
  users: alias('model.users'),
  employees: alias('model.employees'),
  allEmployees: union('users', 'employees'),
  userNames: mapBy('users', 'firstName'),
  employeeNames: mapBy('employees', 'firstName'),
  allUniqueNames: uniq('userNames'),
  intersectNames: intersect('userNames', 'employeeNames'),
  userIncome: mapBy('users', 'income'),
  maxUserIncome: max('userIncome'),
  minUserIncome: min('userIncome'),
  sumThem: sum('userIncome')

});



// const {
//   get,
//   computed: { alias, union, mapBy, uniq, intersect, max},
//   Controller
// } =Ember;
//
// users: alias('model.users'),
// employees: alias('model.employees'),
// allPeople: union('users', 'employees'),
// userName: mapBy('allPeople', 'firstName'),
// allUniqueNames: uniq('userName', 'firstName'),
// allIntersectingnames: intersect('allPeople', 'firstName'),
// userIncome: mapBy('users', 'income'),
// maxUserIncome: max('userIncome')
