import React, {useState} from "react";
import {TablePagination, Grid} from "@mui/material";
import ProductCard from "./ProductCard"


export default function ProductsTable(props) {
    const [page, setPage] = useState(0);
    const rowsPerPage = 100;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <React.Fragment>
            <Grid container spacing={5}
                  className={"mainGrid"} aria-label={"main-grid"}
            >

                {
                    props.data !== undefined && props.data.length > 0 ? props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) =>
                        <ProductCard data={row} key={"rowId" + index}/>
                    ) : (
                        <div className={"info"} />
                    )

                }


            </Grid>

            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onClick={() => window.scrollTo(0, 0)}
                aria-label={"pagination"}
            />

        </React.Fragment>


    );


}