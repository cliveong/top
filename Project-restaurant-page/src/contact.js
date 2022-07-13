const renderContact = () => {
    const contentDiv = document.querySelector(".contentModules");

    const openingHours = document.createElement('div');
    openingHours.className = "openingHours";
    const titleOH = document.createElement('div');
    titleOH.className = "titleOH title";
    titleOH.textContent = "Opening hours";
    const weekdays = document.createElement('div');
    weekdays.className = "weekdays";
    weekdays.textContent = "Weekdays: 11am - 9pm";
    const weekends = document.createElement('div');
    weekends.className = "weekEnds";
    weekends.textContent = "Weekends: 12pm - 11pm";
    openingHours.appendChild(titleOH);
    openingHours.appendChild(weekdays);
    openingHours.appendChild(weekends);
    contentDiv.appendChild(openingHours);

    const location = document.createElement('div');
    location.className = 'location';
    const titleL = document.createElement('div');
    titleL.className = "titleL title";
    titleL.textContent = "Address";
    const address = document.createElement('div');
    address.className = "address";
    address.textContent = "International Merchandise Mart (IMM Building) 2 Jurong East Street 21 #03-165";
    location.appendChild(titleL);
    location.appendChild(address);
    contentDiv.appendChild(location);

    const contactNum = document.createElement('div');
    contactNum.className = 'contactNum';
    const titleCN = document.createElement('div');
    titleCN.className = "titleCN title";
    titleCN.textContent = "Contact Number";
    const number = document.createElement('div');
    number.className = "number";
    number.textContent = "(+65) 63686950";
    contactNum.appendChild(titleCN);
    contactNum.appendChild(number);
    contentDiv.appendChild(contactNum);
}

export default renderContact;