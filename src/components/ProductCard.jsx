import React, {useState} from "react";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import DetailsDialog from "./DetailsDialog";
import loadSalePrice from "../utils/loadSalePrice";
import Image from "./Image";

const useStyles = makeStyles({
    title: {
        fontWeight: "bold",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "10px",
        fontSize: "12px",
        textAlign: "center",
    },
    price: {
        fontSize: "15px",
        marginTop: "10px",
        marginRight: "5px",
    },
    salePrice: {
        color: "green",
        marginTop: "10px",
        marginRight: "5px",
        fontSize: "15px",
        fontWeight: "bold",
    },
    gender: {
        color: "#123C69",
        fontSize: "12px",
        fontWeight: "bold",
    }
});

export default function ProductCard(props) {
    const classes = useStyles();
    const product = props.data;
    const [open, setOpen] = useState(false);
    return (
        <div
          className="paper"
            onClick={() => setOpen(!open)}
        >
            <Grid container spacing={2} direction="column"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs>
                    <div aria-label={"main-image"}>
                        <Image imageSource={product.image_link}/>
                    </div>
                </Grid>
                <Grid item xs>
                    <Typography gutterBottom component="div" className={classes.title}  aria-label={"title"}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom style={{opacity: "0.5"}}  aria-label={"gtin"}>
                        {product.gtin}
                    </Typography>
                    <Typography className={classes.gender} aria-label={"gender"}>
                        {product.gender}
                    </Typography>
                </Grid>
                <Grid item aria-label={"prices"}>
                    {
                        loadSalePrice(product.price, product.sale_price) ?

                            (<div><Typography className={classes.price} component="div"
                                              style={{textDecoration: "line-through"}}>
                                {product.price}
                            </Typography>
                                <Typography className={classes.salePrice} component="div" >
                                    {product.sale_price}
                                </Typography></div>) :

                            <Typography className={classes.price} component="div">
                                {product.price}
                            </Typography>

                    }
                </Grid>
            </Grid>

            {
                open ? <DetailsDialog open={open} additionalImage={product.additional_image_link}/> : null
            }

        </div>
    );
}
