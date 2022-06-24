let myLibrary = [];

//New book object
function Book(title, author, pages, read) {
    this.toDelete = false;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//rerenders the table
function rerender() {
    if (myLibrary.length > 0) {
        const existing = document.querySelectorAll("tbody>tr");
        const newtbody = document.querySelector("tbody");
        existing.forEach((row) => row.remove());
        for(let i = 0; i < myLibrary.length; i++) {
            const newRow = formNewRow(myLibrary[i] ,i);
            newtbody.appendChild(newRow);
        }
        if (myLibrary.length < 5) {
            fillerRows(5-myLibrary.length)
        }
    } else {
        const existing = document.querySelectorAll("tbody>tr");
        existing.forEach((row) => row.remove());
    }

}

//adds empty rows so tables looks bigger
function fillerRows(number) {
    const tbody = document.querySelector("tbody");
    for(let i = 0; i < number; i++) {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
    }
}

//form rows per myLibrary content
function formNewRow(newData , index) {
    let rowIndex = "row" + index;
    // let rowIndex1 = rowIndex + " 1";
    // let rowIndex2 = rowIndex + " 2";

    //create row
    const tr = document.createElement("tr");

    //delete checkbox
    const td1 = document.createElement("td");
    const chkbox1 = document.createElement("input");
    chkbox1.type = "checkbox";  
    //chkbox1.className = rowIndex1;

    chkbox1.addEventListener("change", () => { 
        //update to delete status of book
        if(chkbox1.checked) {
            myLibrary[index].toDelete = true;
        } else {
            myLibrary[index].toDelete = false;
        }
    });

    td1.appendChild(chkbox1);
    tr.appendChild(td1);

    //index
    const td2 = document.createElement("td");
    td2.textContent = index+1;
    tr.appendChild(td2);

    //title
    const td3 = document.createElement("td");
    td3.textContent = newData.title;
    tr.appendChild(td3);

    //author
    const td4 = document.createElement("td");
    td4.textContent = newData.author;
    tr.appendChild(td4);

    //pages
    const td5 = document.createElement("td");
    td5.textContent = newData.pages;
    tr.appendChild(td5);

    //read checkbox
    const td6 = document.createElement("td");
    const chkbox2 = document.createElement("input");
    chkbox2.type = "checkbox";  
    //chkbox2.className = rowIndex2;
    
    if (newData.read) {
        chkbox2.checked = true;
    }

    chkbox2.addEventListener("change", () => {
        //updates read status of book in mylibrary
        if(chkbox2.checked) {
            myLibrary[index].read = true;
        } else {
            myLibrary[index].read = false;
        }
    });

    td6.appendChild(chkbox2);
    tr.appendChild(td6);

    return tr;

}

const addBk = document.querySelector("#bookForm");

addBk.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents reloading of page
    checkSubmission();
    clearFields();
});

//empties the fields for next book
function clearFields() {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

//forms a new book object base on form and send its for checking
function checkSubmission() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    if (checkDuplicates(newBook)) { //if book already exist
        alert("You already have this book in your library!");
    } else {
        myLibrary.push(newBook)
    }
    rerender();
}


//check for existing duplicates in mylibrary
function checkDuplicates(newBook) {
    for(let i = 0; i < myLibrary.length; i++) {
        if (newBook.title == myLibrary[i].title &&
            newBook.author == myLibrary[i].author &&
            newBook.pages == myLibrary[i].pages) {
            return true;
        }
    }
    return false;
}
    
const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
    deletion();
});

//delete books marked for deletion
function deletion() {
    let tempMyLibrary = [];
    for(let i = 0; i < myLibrary.length; i++) {
        if (!(myLibrary[i].toDelete)) {
            tempMyLibrary.push(myLibrary[i])
        }
    }

    myLibrary = tempMyLibrary;
    rerender();
}



