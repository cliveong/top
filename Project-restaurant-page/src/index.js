import "./style.css";
import renderContact from "./contact";
import wipe from "./wipe";
import renderHome from "./home";

const contentDiv = document.querySelector("#content");

const header = document.createElement("div");
header.className = 'header';
header.textContent = 'Shitty Pizza'
contentDiv.appendChild(header);

const buttons = document.createElement("div");
buttons.className = 'buttons'

const home = document.createElement("div");
home.className = 'home';
home.textContent = 'Home';
home.addEventListener("click", () => {
    wipe(contentModules);
    renderHome();
})

const contact = document.createElement("div");
contact.className = 'contact';
contact.textContent = 'Contact';
contact.addEventListener("click", () => {
    wipe(contentModules);
    renderContact();
})

buttons.appendChild(home);
buttons.appendChild(contact);

const contentModules = document.createElement("div");
contentModules.className = 'contentModules';

contentDiv.appendChild(buttons);
contentDiv.appendChild(contentModules);

renderContact();