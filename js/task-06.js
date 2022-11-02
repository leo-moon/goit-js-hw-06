let controlValid = 'valid';
document
    .querySelector('input')
    .addEventListener('blur', outInputBlur)

function outInputBlur(value) {
    value.currentTarget.classList.remove(controlValid);
    controlValid = 
      parseInt(value.currentTarget.dataset.length) === value.currentTarget.value.length ? 
      'valid': 'invalid';
    value.currentTarget.classList.add(controlValid);
}



// document  
// .querySelector("input")  
// .addEventListener("blur", onInputValidFilling);

// console.log(document  
//     .querySelector("#validation-input"))

// function onInputValidFilling(event) {  
//     const inputEl = event.currentTarget;

//     const correctNumbersOfSimbols = 
//     inputEl.value.length === parseInt(inputEl.dataset.length);  

//     const classArr = ["valid", "invalid"];

//     classArr.forEach((classEl) => {
//         console.log(classEl, inputEl.classList, inputEl.classList.remove(classEl));
//         inputEl.classList.remove(classEl)
//     });

//     inputEl.classList.add(correctNumbersOfSimbols ? "valid" : "invalid");
//     // console.log(classEl, inputEl.classList);
// }


