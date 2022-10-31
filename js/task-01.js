const getElementListSelectorRef = (element = 'document', selector) =>
    element.querySelector(selector);

const getUlListRef = getElementListSelectorRef(document,'#categories');
const getUlListChildrenRef = getUlListRef.children;
console.log('Number of categories:', getUlListChildrenRef.length);

const categoryRef = li => {
    const titleRef = getElementListSelectorRef(li, 'h2');
    console.log('Category:', titleRef.textContent);

    const ulInLi = getElementListSelectorRef(li, 'ul');
    console.log('Elements:', ulInLi.children.length);
}

for (let i = 0; i < getUlListChildrenRef.length; i++) {
categoryRef(getUlListChildrenRef[i]);
}

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5