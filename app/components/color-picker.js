import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['red', 'green', 'blue', 'orange', 'yellow', 'purple'],


  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  }

  // actions: {
  //   setCurrentColor(color) {
  //     this.set('currentColor', color)
  //     Ember.$('.container').css('background-color', color);
  //   }
  //
  // }
});
