import React from "react";
import ProductsGrid from "../../components/ProductsGrid";
import {render} from "@testing-library/react";

const item = [{
    title: "KIOMI Uhr navy",
    gtin: "4054789817584",
    gender: "male",
    salePrice: "14.95 EUR",
    price: "29.95 EUR",
    imageLink:
        "https://mosaic01.ztat.net/vgs/media/large/K4/45/1M/A0/6K/11/K4451MA06-K11@6.jpg",
}];

describe("check if catalog with data loaded correctly", () => {
    test("page should have pagination", () => {
        const component = render(<ProductsGrid data={item}/>);
        const pagination = component.findByLabelText("pagination");
        expect(pagination).toBeTruthy();
    });
    test("page should have main grid", () => {
        const component = render(<ProductsGrid data={item}/>);
        const grid = component.findByLabelText("main-grid");
        expect(grid).toBeDefined();

    });
})

