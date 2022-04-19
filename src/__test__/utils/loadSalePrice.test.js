const loadSalePrice = require("../../utils/loadSalePrice");

describe("test function which finde on-sale products",()=>{

    test ("return true if sale price is lower that main price",()=>{
        expect(loadSalePrice("23 EUR","18 EUR")).toBe(true);
    });

    test ("return false if the price is equal than the sale price",()=>{
        expect(loadSalePrice("30 EUR","30 EUR")).toBe(false);
    });

    test ("return false if the sale price is bigger than the main price",()=>{
        expect(loadSalePrice("30 EUR","60 EUR")).toBe(false);
    });
});