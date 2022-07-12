const renderContact = () => {
    const contentDiv = document.querySelector(".contentModules");

    const openingHours = document.createElement('div');
    openingHours.ClassName = "openingHours";
    const titleOH = document.createElement('div');
    titleOH.ClassName = "titleOH";
    titleOH.textContent = "Opening hours";
    const weekdays = document.createElement('div');
    weekdays.ClassName = "weekdays";
    weekdays.textContent = "Weekdays: 11am - 9pm";
    const weekends = document.createElement('div');
    weekends.ClassName = "weekEnds";
    weekends.textContent = "Weekends: 12pm - 11pm";
    openingHours.appendChild(titleOH);
    openingHours.appendChild(weekdays);
    openingHours.appendChild(weekends);
    contentDiv.appendChild(openingHours);

    const location = document.createElement('div');
    location.className = 'location';
    const titleL = document.createElement('div');
    titleL.ClassName = "titleL";
    titleL.textContent = "Address";
    const address = document.createElement('div');
    address.ClassName = "address";
    address.textContent = "International Merchandise Mart (IMM Building) 2 Jurong East Street 21 #03-165";
    location.appendChild(titleL);
    location.appendChild(address);
    contentDiv.appendChild(location);

    const contactNum = document.createElement('div');
    contactNum.className = 'contactNum';
    const titleCN = document.createElement('div');
    titleCN.ClassName = "titleCN";
    titleCN.textContent = "Contact Number";
    const number = document.createElement('div');
    number.ClassName = "number";
    number.textContent = "63686950";
    contactNum.appendChild(titleCN);
    contactNum.appendChild(number);
    contentDiv.appendChild(contactNum);
}

export default renderContact;