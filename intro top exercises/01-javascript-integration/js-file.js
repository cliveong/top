const container = document.querySelector('#container');

const redp = document.createElement('p');
redp.classList.add("redp");
redp.textContent = "Hey I’m red!";
redp.style.color = "red";

container.appendChild(redp);

const bluh3 = document.createElement("h3");
bluh3.classList.add("bluh3");
bluh3.textContent = "I'm a blue h3!";
bluh3.style.color = "blue";

container.appendChild(bluh3);

const div = document.createElement("div");
div.classList.add("div");
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
const p = document.createElement("p");
p.classList.add("p");
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);