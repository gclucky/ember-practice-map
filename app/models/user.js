import DS from 'ember-data';
import Ember from 'ember';

const {
  get,
  set,
  computed
} = Ember;

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  occupation: DS.attr('string'),
  contribution: DS.attr('number'),
  income: DS.attr('number'),

  fullName: computed('firstName', 'lastName', function() {
    return `${get(this, 'firstName')} ${get(this, 'lastName')}`
  }),

  contributionPercentage: computed('contribution', 'income', {
    get() {
      let contribution = get(this, 'contribution');
      let income = get(this, 'income');
      return (contribution / income * 100).toFixed(2);
    },
    set(key,value) {
        let newContribution  = value/100 * get(this, 'income');
        set(this, 'contribution', newContribution);
        return value;
      }
  }),

  contributionGreaterSeven: computed.gte('contributionPercentage', 7)




});
























// const {
//   get,
//   set,
//   computed
// } = Ember;
//
// firstName: DS.attr('string'),
// lastName: DS.attr('string'),
// occupation: DS.attr('string'),
// contribution: DS.attr('number'),
// income: DS.attr('number'),
//
// fullName: computed('firstName', 'lastName', function(){
//   return `${get(this,'firstName')} ${get(this, 'lastName')}` ;
// }),
//
// contributionPercentage: computed('contribution', 'income', {
//   get() {
//     let contribution = get(this, 'contribution');
//     let income = get(this, 'income');
//     return (contribution/income * 100).toFixed(2);
//   },
//   set(key,value) {
//     let newContribution  = value/100 * get(this, 'income');
//     set(this, 'contribution', newContribution);
//     return value;
//   }
// }),
// contributeOverSeven: computed.gte('contributionPercentage', 7)
//
