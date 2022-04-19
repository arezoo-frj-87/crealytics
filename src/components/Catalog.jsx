import React, {useEffect, useState} from "react";
import useFetch from "../utils/useFetch";
import {TextField, FormGroup, FormControlLabel, Checkbox, InputLabel} from "@mui/material";
import {MenuItem, FormControl, Select} from "@mui/material";
import findProducts from "../utils/findProducts";
import ProductsGrid from "./ProductsGrid";

export default function Catalog() {
    const {isLoading, error, data} = useFetch("products.csv");
    const gender = ["all gender", "female", "male", "unisex"];
    const [selectedGender, setSelectedGender] = useState("all gender");
    const [inputValue, setInputValue] = useState("");
    const [onSale, setOnSale] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

    useEffect(() => {
        const filteredProducts = findProducts(onSale, data ? data : [], selectedGender, inputValue);
        setFilteredData(filteredProducts);
    }, [onSale, selectedGender, inputValue, data])

    return (
        <div>
            <div className={"filter"}>
                <TextField id="searchBox" label="Search" variant="outlined" className="searchBox"
                           inputProps={{"data-testid": "searchInput"}}
                           onChange={(e) => setInputValue(e.target.value)}/>
                <FormGroup className="saleBox" >
                    <FormControlLabel control={<Checkbox color={"success"} inputProps={{"data-testid": "onSale"}}
                                                         onChange={(event) => setOnSale(event.target.checked)}/>}
                                      label="sale_price"
                    />
                </FormGroup>
                <FormControl className="genderBox">
                    <InputLabel id="selected_gender" >Gender</InputLabel>
                    <Select
                        id="gender"
                        value={selectedGender}
                        label="gender"
                        onChange={handleChange}
                        inputProps={{"data-testid": "gender"}}
                    >
                        {gender.map((item, index) => <MenuItem value={item}
                                                               key={"genderId_" + index}>{item}</MenuItem>)}

                    </Select>
                </FormControl>

            </div>
            <div data-testid="gridPart">
                {
                    isLoading ? <div className={"info"} data-testid={"loading"} >{"...Loading"}</div> : error ?
                        <div className={"info"} data-testid={"error"}>{error}</div> :
                        <ProductsGrid data={filteredData || []}/>
                }
            </div>

        </div>
    );


}