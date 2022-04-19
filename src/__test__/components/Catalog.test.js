import React from "react";
import Catalog from "../../components/Catalog";
import {render,cleanup} from "@testing-library/react";
import useFetch from '../../utils/useFetch'

jest.mock('../../utils/useFetch');

beforeEach(() => {
    jest.resetAllMocks();
});

afterEach(() => {
    cleanup();
});

describe("catalog renders", () => {
    test("loaded search box is empty", () => {
        useFetch.mockReturnValue({
            isLoading: false,
            error: null,
            data: [],
        });
        const component = render(<Catalog/>);
        const searchInput = component.getByTestId("searchInput");
        expect(searchInput.value).toBe("");
    });
    test("loaded sale box is unChecked", () => {
        useFetch.mockReturnValue({
            isLoading: false,
            error: null,
            data: [],
        });
        const component = render(<Catalog/>);
        const checkbox = component.getByTestId("onSale");
        expect(checkbox).toHaveProperty("checked", false);
    });

    test("loaded gender drop down has all-gender value",()=>{
        useFetch.mockReturnValue({
            isLoading: false,
            error: null,
            data: [],
        });
        const component = render(<Catalog/>);
        const gender= component.getByTestId("gender");
        expect(gender.value).toBe("all gender");
    });
    test("loading text is loaded corectly",()=>{
        useFetch.mockReturnValue({
            isLoading: true,
            error: null,
            data: [],
        });
        const component = render(<Catalog/>);
        const loading= component.getByTestId("loading");
        expect(loading).toBeTruthy();
    });
    test("grid part is loaded corectly",()=>{
        useFetch.mockReturnValue({
            isLoading: true,
            error: null,
            data: [],
        });
        const component = render(<Catalog/>);
        const loading= component.getByTestId("gridPart");
        expect(loading).toBeTruthy();
    })
});