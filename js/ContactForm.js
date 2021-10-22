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

const save = () => {
    try {
        let contact = createContact();
        createAndUpdateStorage(contact);
    } catch (error) {
        alert(error);
    }
};

const createAndUpdateStorage = (contact) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
        contactList.push(contact);
    } else {
        contactList = [contact];
    }
    alert(contact.toString());
    alert("Contact Added Sucessfully");
    localStorage.setItem("ContactList", JSON.stringify(contactList));
}

const createContact = () => {
    let contact = new Contact();
    contact.id = new Date().getTime();

    try {
        contact.name = getInputValueById("#name");
    } catch (error) {
        setTextValue(".name-error", error);
        throw error;
    }

    try {
        contact.phoneNumber = getInputValueById("#phoneNumber");
    } catch (error) {
        setTextValue(".tel-error", error);
        throw error;
    }

    try {
        contact.address = getInputValueById("#address");
    } catch (error) {
        setTextValue(".address-error", error);
        throw error;
    }

    let city = getInputValueById("#city");
    if (city != "Select City") {
        contact.city = city;
    } else {
        throw "Please select city";
    }

    let state = getInputValueById("#state");
    if (state != "Select State") {
        contact.state = state;
    } else {
        throw "Please select state";
    }

    try {
        contact.zip = getInputValueById("#zip");
    } catch (error) {
        setTextValue(".zip-error", error);
        throw error;
    }

    alert(contact.toString());
    return contact;
};

const resetForm = () => {
    setValue("#name", "");
    setValue("#phoneNumber", "");
    setValue("#address", "");
    setSelectedIndex('#city', 0);
    setSelectedIndex('#state', 0);
    setValue("#zip", "");
    setTextValue(".name-error", "");
    setTextValue(".tel-error", "");
    setTextValue(".address-error", "");
    setTextValue(".zip-error", "");
};

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
};

const getInputValueById = (property) => {
    let value = document.querySelector(property).value;
    return value;
};