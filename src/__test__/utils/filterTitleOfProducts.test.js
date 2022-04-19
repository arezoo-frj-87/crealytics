const filterTitleOfProducts = require("../../utils/filterTitleOfProducts");


describe("test filter data according to title", () => {
    const data = [{
        title: "Zalando Essentials Maternity Jerseykleid black",
        price: "30 EUR", gender: "female", sale_price: "20 EUR"
    },
        {title: "Zalando Essentials Bleistiftrock black", price: "30 EUR", gender: "male", sale_price: "20 EUR"},
        {
            title: "Even&Odd Schal grey",
            price: "30 EUR", gender: "male", sale_price: "30 EUR"
        },
    ];

    test("return all  product title which includes the zalando ", () => {
        const expected = [data[0], data[1]];
        expect(filterTitleOfProducts("ZALANDO", data)).toEqual(expected);
    });

    test("return all product which includes the name", () => {
        const expected = [data[2]];
        expect(filterTitleOfProducts("zalando", data)).not.toEqual(expected);
    });

});