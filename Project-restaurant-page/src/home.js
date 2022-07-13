
const renderHome = () => {
    const contentDiv = document.querySelector(".contentModules");

    const gridWrapper = document.createElement("div");
    gridWrapper.className = "gridWrapper";

    const image1 = document.createElement("div");
    image1.className = "image1 image";
    const name1 = document.createElement("div");
    name1.className = "name1 name";
    name1.textContent = "Hawaiian Pizza - $24";
    image1.appendChild(name1);

    const image2 = document.createElement("div");
    image2.className = "image2 image";
    const name2 = document.createElement("div");
    name2.className = "name2 name";
    name2.textContent = "Pepperoni Pizza - $24";
    image2.appendChild(name2);

    const image3 = document.createElement("div");
    image3.className = "image3 image";
    const name3 = document.createElement("div");
    name3.className = "name3 name";
    name3.textContent = "Cheese Pizza - $26";
    image3.appendChild(name3);

    const image4 = document.createElement("div");
    image4.className = "image4 image";
    const name4 = document.createElement("div");
    name4.className = "name4 name";
    name4.textContent = "Veggie Pizza - $28";
    image4.appendChild(name4);

    gridWrapper.appendChild(image1);
    gridWrapper.appendChild(image2);
    gridWrapper.appendChild(image3);
    gridWrapper.appendChild(image4);
    contentDiv.appendChild(gridWrapper);
    
}

export default renderHome;