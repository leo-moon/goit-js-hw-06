let controlValid = 'valid';
document
    .querySelector('input')
    .addEventListener('blur', outInputBlur)

function outInputBlur(event) {
    event.currentTarget.classList.remove(controlValid);
    controlValid = 
      parseInt(event.currentTarget.dataset.length) === event.currentTarget.value.length ? 
      'valid': 'invalid';
    event.currentTarget.classList.add(controlValid);
}
