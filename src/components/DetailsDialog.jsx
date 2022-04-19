import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Grid, Typography, Dialog, DialogContent, DialogTitle,} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Image from "./Image";

const useStyles = makeStyles({
    dialogBox: {
        overflowY: true,
        maxWidth: "80vw",
        maxHeight: "80vh",
        cursor: "pointer",
    },
    dialogTitle: {
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        fontSize:"20px",
    },
});

export default function DetailsDialog(props) {
    const [open, setOpen] = useState(false || props.open);
    const additionalImage = props.additionalImage.length > 0 ? props.additionalImage.split(",") : [];
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            id={"additional-image-dialog"}
            classes={{paper: classes.dialogBox}}
            fullWidth={false}
        >
            <DialogTitle id="dilaog-title" className={classes.dialogTitle} aria-label={"header"}>
                <Typography aria-label={"title"} >{"Additional Image"}</Typography>
                <CloseIcon/>
            </DialogTitle>
            <DialogContent aria-label={"image-container"}>
                <Grid container spacing={2}
                      justifyContent="center"
                      alignItems="center">
                    {
                        additionalImage.map((item,index) => <Grid item xs={12} sm container key={"key_"+index}>
                            <Image imageSource={item}/>
                        </Grid>)

                    }
                </Grid>
            </DialogContent>
        </Dialog>

    )


}