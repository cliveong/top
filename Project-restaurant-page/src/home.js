const renderHome = () => {
    const contentDiv = document.querySelector(".contentModules");

    const gridWrapper = document.createElement("div");
    gridWrapper.className = "gridWrapper";

    const image1 = document.createElement("div");
    image1.className = "image1";
    const name1 = document.createElement("div");
    name1.className = "name1";
    name1.textContent = "Hawaiian Pizza - $24";
    image1.appendChild(name1);

    const image2 = document.createElement("div");
    image2.className = "image2";
    const name2 = document.createElement("div");
    name2.className = "name2";
    name2.textContent = "Pepperoni Pizza - $24";
    image2.appendChild(name2);

    const image3 = document.createElement("div");
    image3.className = "image3";
    const name3 = document.createElement("div");
    name3.className = "name3";
    name3.textContent = "Buffalo Pizza - $26";
    image3.appendChild(name3);

    const image4 = document.createElement("div");
    image4.className = "image4";
    const name4 = document.createElement("div");
    name4.className = "name4";
    name4.textContent = "Veggie Pizza - $28";
    image4.appendChild(name4);

    contentDiv.appendChild(image1);
    contentDiv.appendChild(image2);
    contentDiv.appendChild(image3);
    contentDiv.appendChild(image4);
    
}

export default renderHome;