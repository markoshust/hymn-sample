import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import routes from './routes';

Meteor.startup(() => {
  render(routes, window.document.getElementById('root'));
});
