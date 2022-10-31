const getElementListSelectorRef = (selector, element = document) =>
    element.querySelector(selector);
    
// const counter = {
//     value: 0,
//     decrement() {
//         this.value -= 1;
//     },
//     increment() {
//         this.value += 1;
//     },
// }

// const mainValueRef = getElementListSelectorRef('#value');

// const divCounterRef = getElementListSelectorRef('#counter');

// const decrementRef = divCounterRef.firstElementChild;
// const onDecrementBtn = decrementRef.addEventListener('click', function() {
//     counter.decrement();
//     mainValueRef.textContent = counter.value;
// });

// const incrementRef = divCounterRef.lastElementChild;
// const onIncrementBtn = incrementRef.addEventListener('click', function() {
//     counter.increment();
//     mainValueRef.textContent = counter.value;
// });


let counterValue = 0;

const counter = (changeValue) => {
    counterValue += changeValue;
    mainValueRef.textContent = counterValue;
}

const mainValueRef = getElementListSelectorRef('#value');
const divCounterRef = getElementListSelectorRef('#counter');

const decrementRef = divCounterRef.firstElementChild;
const onDecrementBtn = decrementRef.addEventListener('click', event => {
    counter(-1);
});

const incrementRef = divCounterRef.lastElementChild;
const onIncrementBtn = incrementRef.addEventListener('click', event => {
    counter(1);
});