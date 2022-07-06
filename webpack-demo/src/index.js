import _ from 'lodash';
import './style.css';
// import your function
import myName from './myName';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  // use your function!
  //element.textContent = myName('Cody');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());