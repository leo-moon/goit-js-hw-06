const getElementListSelectorRef = (selector, element = document) =>
    element.querySelector(selector);

const nameRef = getElementListSelectorRef('input');
const nameOutputRef = getElementListSelectorRef('#name-output');
const nameOutputRefAnonimus = nameOutputRef.textContent;

const onInputCheck = () => {
        console.log(nameRef.value);
        nameOutputRef.textContent = nameRef.value != '' ? 
            nameRef.value: nameOutputRefAnonimus ;
}

const onInput = nameRef.addEventListener('input', onInputCheck);
// console.log(nameRef.value, nameRef);