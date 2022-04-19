import React from "react";
import ProductCard from "../../components/ProductCard";
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


describe(("test each card has correct value"),()=>{

    test("image should show the image of the item",()=>{
        const component= render(<ProductCard data={item}/>);
        const image = component.getByLabelText("main-image");
        expect(image.src).toBe(item.imageLink);
    });
    test("title should show the title of the item",()=>{
        const component= render(<ProductCard data={item}/>);
        const title = component.getByLabelText("title");
        expect(title.label).toBe(item.title);
    });
    test("gtin should show the gtin of the item",()=>{
        const component= render(<ProductCard data={item}/>);
        const gtin = component.getByLabelText("gtin");
        expect(gtin.label).toBe(item.gtin);
    });
    test("gender should show the gender of the item",()=>{
        const component= render(<ProductCard data={item}/>);
        const gender = component.getByLabelText("gtin");
        expect(gender.label).toBe(item.gender);
    });
    test("prices loaded correctly",()=>{
        const component= render(<ProductCard data={item}/>);
        const prices = component.getByLabelText("prices");
        expect(prices).toBeTruthy();
    });


})

