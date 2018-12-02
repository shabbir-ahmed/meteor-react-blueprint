import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('/serever/main.js');
});
