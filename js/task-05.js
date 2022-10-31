const getElementListSelectorRef = (selector, element = document) =>
    element.querySelector(selector);

const nameRef = getElementListSelectorRef('input');



console.log(nameRef.value, nameRef);