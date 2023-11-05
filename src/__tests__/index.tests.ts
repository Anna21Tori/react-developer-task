import { getItemsMaxNumber } from "..";
import { Item } from "../interfaces";


test('Tests for string properties which include only one number', () => {
    const fakeItems: Item[] = [{name: "Item 34"}, {name: "Item 54"}, {name: "Item 23"}, {name: "Item 5"}];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(54);
});

test('Tests for string properties which one of them dose not include any number', () => {
    const fakeItems: Item[] = [{name: "Item 34"}, {name: "Item"}, {name: "Item 23"}, {name: "Item 5"}];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(34);
});

test('Tests for empty array', () => {
    const fakeItems: Item[] = [];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(0);
});

test('Tests for string properties which all does not any number', () => {
    const fakeItems: Item[] = [{name: "Item"}, {name: "Item"}, {name: "Item"}, {name: "Item"}];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(0);
});

test('Tests for bad assertion', () => {
    const fakeItems: Item[] = [{name: "Item 34"}, {} as Item, {name: "Item 23"}, {name: "Item 5"}];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(0);
});

test('Tests for string properties which include several numbers', () => {
    const fakeItems: Item[] = [{name: "109Item 34 67"}, {name: "56Item 23"}, {name: "1034Item 5"}];
    const result = getItemsMaxNumber(fakeItems);
    expect(result).toBe(1034);
});