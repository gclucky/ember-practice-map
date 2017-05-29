import Ember from 'ember';
  const {
    get,
    set,
    Component
  } = Ember;

export default Component.extend({
 users: null,
 filteredUser: null,
 firstUser: null,

didReceiveAttrs() {
  this._super(...arguments);
  let users = get(this, 'users');
  let filteredUser = set(this, 'filteredUser', users);
},
actions: {
  filteredListOfUser(){
    let users = get(this, 'users');
    let firstUser = get(this, 'firstUser');
    let narrowList = users.findBy('firstName', firstUser);
    if (narrowList) {
      set(this, 'filteredUser', [narrowList]);
    } else {
      set(this, 'filteredUser', users);
    }

  }
}




});



// didReceiveAttrs() {
//   this._super(...arguments);
//   let firstUser = get(this, 'users.firstObject');
//   set(this, 'firstUser', firstUser);
// }
