/* exported student */

var student = {
  firstName: 'Solomon',
  lastName: 'Jin',
  subject: 'Not CSS',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  },
  getThis: function () {
    return this;
  }
};
