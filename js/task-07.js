const spanRef = document.querySelector('#text');
document
    .querySelector('#font-size-control')
    .addEventListener('input', outInputRange)

function outInputRange(event) {
    const valueRange = event.currentTarget.valueAsNumber.toString() + 'px';
    spanRef.style.fontSize=valueRange;
} 
