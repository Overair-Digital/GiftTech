let form = document.querySelector('#requestForm');
let name = document.querySelector('#rName');
let surname = document.querySelector('#rSurname');
let org = document.querySelector('#org');
let address = document.querySelector('#address');
let email = document.querySelector('#rEmail');
let phone = document.querySelector('#rNumber');

let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let phoneRegex = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/


form.addEventListener('submit', (e) => {
    const nameVal = name.value.trim();
    const surnameVal = surname.value.trim();
    const orgVal = org.value.trim();
    const addressVal = address.value.trim();
    const emailVal = email.value.trim();
    const phoneNrVal = phone.value.trim();

    if (nameVal === "") {
        e.preventDefault();
        setErrorFor(name, 'Name cannot be blank.')
    } else {
        setSuccessFor(name, 'Valid name.')
    }

    if (surnameVal === "") {
        e.preventDefault();
        setErrorFor(surname, 'Surname cannot be blank.');
    } else {
        setSuccessFor(surname, 'Valid Surname');
    }

    if (orgVal === "") {
        e.preventDefault();
        setErrorFor(org, 'Organisation cannot be blank.')
    } else {
        setSuccessFor(org, 'Valid Organisation.')
    }

    if (addressVal === "") {
        e.preventDefault();
        setErrorFor(address, 'Address cannot be blank.');
    } else {
        setSuccessFor(address, 'Valid Address.')
    }

    if (emailVal === "") {
        e.preventDefault();
        setErrorFor(email, 'Email cannot be blank.')

    } else if (!isEmail(emailVal)) {
        e.preventDefault();
        setErrorFor(email, 'Not a valid email.')
    } else {
        setSuccessFor(email, 'Valid email.')
    }

    if (phoneNrVal === "") {
        e.preventDefault();
        setErrorFor(phone, 'Phone number cannot be blank.');
    } else if (!isPhoneNr(phoneNrVal)) {
        e.preventDefault();
        setErrorFor(phone, 'Not valid phone number.')
    } else {
        setSuccessFor(phone, 'Valid phone number.')
    }
});

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";
    small.style.color = "white";
    small.innerText = message;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";
    small.style.color = "red";
    small.innerText = message;
}

function isEmail(email) {
    return Regx.test(email);
}

function isPhoneNr(phone) {
    return phoneRegex.test(phone)
}