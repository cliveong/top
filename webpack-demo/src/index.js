import _ from 'lodash';
import './style.css';
// import your function
import myName from './myName';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // use your function!
  //element.textContent = myName('Cody');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  
  //add button
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;


  element.appendChild(myIcon);
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());