window.addEventListener("DOMContentLoaded", (event) => {
    //validate first name
    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-error");
    name.addEventListener("input", function () {
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            new Contact().name = name.value;
            nameError.textContent = "";
        } catch (error) {
            nameError.textContent = error;
        }
    });

    //validation for phone number
    const phoneNumber = document.querySelector("#phoneNumber");
    const numberError = document.querySelector(".tel-error");
    phoneNumber.addEventListener("input", function () {
        if (phoneNumber.value.length == 0) {
            numberError.textContent = "";
            return;
        }
        try {
            new Contact().phoneNumber = phoneNumber.value;
            numberError.textContent = "";
        } catch (error) {
            numberError.textContent = error;
        }
    });

    //validation for zip code
    const zip = document.querySelector("#zip");
    const zipError = document.querySelector(".zip-error");
    zip.addEventListener("input", function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            new Contact().zip = zip.value;
            zipError.textContent = "";
        } catch (error) {
            zipError.textContent = error;
        }
    });
});

function save(event) {
    alert("save");
    event.preventDefault();
    event.stopPropagation();
    
    try {
        let contact = createContact();
        createAndUpdateStorage(contact);
    } catch (error) {
        return(alert(error));
        
    }
}

function createAndUpdateStorage(contact) {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
        contactList.push(contact);
    } else {
        contactList = [contact];
    }
    alert("Contact Added Sucessfully");
    localStorage.setItem("contactList", JSON.stringify(contactList));
}

function createContact() {
    let contactObject = new Contact();
    try{
    contactObject.id = new Date().getTime();
    contactObject.name = getInputValueById('#name');
    contactObject.phoneNumber = getInputValueById("#phoneNumber");
    contactObject.address = getInputValueById('#address');
    contactObject.state = getInputValueById("#state");
    contactObject.city = getInputValueById("#city");
    contactObject.zipcode= getInputValueById("#zipCode");
    console.log(contactObject.toString());
} catch (error) {
    console.log(error);
}
return contactObject;
}

function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
}