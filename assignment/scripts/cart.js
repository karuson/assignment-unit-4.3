console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

// function to add 'item' to basket array
// after `item` is added, return `true` value
function addItem(item) {
    console.log('in addItem function');
    basket.push(item);
    console.log(`Basket is ${basket}`);
    return true;
} // end addItem

// testing addItem
console.log(`Basket is ${basket}`);
console.log('Adding Ice Cream (expect true)' addItem('Ice Cream'));
console.log(`Basket is now ${basket}`);

function listItems() {
    console.log('in listItems function');
    for (item of basket) {
        console.log(item);
    } // end for
} // end listItems

function empty() {
    console.log('in empty function');
    basket = [];
    console.log(basket);
}









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
