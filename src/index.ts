'use strict'

import { Item } from "./interfaces"

const initialValue = 0;

/**
 * Finds the biggest numbers among string properties.
 * @param {Items[]}  items - Item collection of name properties which is string.
 * @returns {number} - The biggest number that is found among all name properties. If none of strings include any number It will return 0.
 */
export const getItemsMaxNumber = (items: Item[]): number => {
    let max = initialValue;

    try{

        max = items.reduce((previousMax, currentItem) => {
            const currentMax = getItemMaxNumber(currentItem);
            return Math.max(previousMax, currentMax);
        }, initialValue);

    }catch(error: unknown){
        handleError(error); //If It will be used assertion such like [{} as Item]
    }

    return max;
}
/**
 * Finds the biggest numbers that are contained in string.
 * @param {Items[]}  item - Item included string property.
 * @returns {number} - The biggest number that is found in string. If string doesn't include any number It will returen 0.
 */
const getItemMaxNumber = (item: Item): number => {
    const numbers = item.name.match(/\d+/g); //gathers all numbers which are contained in string
    return numbers !== null ? Math.max(...numbers.map(Number)) : initialValue;
}

const handleError = (error: unknown) => {
    if (error instanceof Error) {
        console.log(`${error.name}: ${error.message}`);
    } else {
        console.log("Ops! Something went wrong");
    }
}

// console.log(getItemsMaxNumber([{name: "item 20"}, {name: "item 17 90"}]));
