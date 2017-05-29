import Ember from 'ember';
const {
  get,
  set,
  Service
} = Ember;

export default Service.extend({
  property: null,

  setProperty() {
    set(this, 'property', 'thing')
  },

  getProperty(){
    return get(this, 'property');
  }
});
