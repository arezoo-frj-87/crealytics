const findProducts = require("../../utils/findProducts");

describe("return products that have the same title, gender, and price according to the filters", () => {
    const data = [{
        title: "Zalando",
        price: "30 EUR", gender: "female", sale_price: "30 EUR"
    },
        {title: "pier One", price: "30 EUR", gender: "male", sale_price: "20 EUR"},
        {
            title: "Even&Odd",
            price: "30 EUR", gender: "male", sale_price: "40 EUR"
        },
    ];

    test("return all products whose gender is equal to male and is on-sale", () => {
        const expected = [data[1]];
        expect(findProducts(true, data, "male", "")).toEqual(expected);
    });

    test("return all products", () => {
        const expected = data;
        expect(findProducts(false, data, "all gender", "")).toEqual(expected);
    });

    test("return all product that has a odd a title and is on sale", () => {
        const expected = [data[2]];
        expect(findProducts(true, data, "male", "odd")).not.toEqual(expected);
    });

})
