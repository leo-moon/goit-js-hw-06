const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('input[type = email]'),
    password: document.querySelector('input[type = password]'),
};

let formData = {};

function clearFormValues() {
    refs.form.reset();
};

const formDataItemAdd = ({ name, value }) => formData[name] = value;

const addToFormData = () => {
    for (const element of refs.form.elements) {
        if (element.localName === 'input') {
            formDataItemAdd(element);
        };
    };



//                               а так красивее выглядит
// refs.form
//     .querySelectorAll('input')
//     .forEach(formDataItemCreate)

};    

const onBtnSubmit = event => {
    event.preventDefault ();

    const mailValueFull = refs.email.value != '';
    const passValueFull = refs.password.value != '';
    const mailValueValid = refs.email.value.indexOf('@');
    
    if (!(mailValueFull && passValueFull)) {
        alert('Bсе поля должны быть заполнены!!!');
        return
    } 
    else if ((mailValueValid) < 1) {
        alert('Email is not valid!!!');
        return
    };

    // formData.splice(0, formData.length);
    addToFormData();
    // formData.forEach( );
    console.log(formData);
    clearFormValues();
};

document
    .querySelector('button[type=submit]')
    .addEventListener('click', onBtnSubmit);
