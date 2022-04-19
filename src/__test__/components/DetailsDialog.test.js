import React from "react";
import DetailsDialog from "../../components/DetailsDialog";
import {render} from "@testing-library/react";


describe("dialog box with additional images loaded correctly",()=>{
    test("dialog box has title",()=>{
        const component= render(<DetailsDialog additionalImage={"https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg"} open={true}/>)
        const header= component.getByLabelText("header");
        expect(header).toBeTruthy();
    });
    test("image container loaded correctly",()=>{
        const component= render(<DetailsDialog additionalImage={"https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg"} open={true}/>)
        const container= component.getByLabelText("image-container");
        expect(container).toBeTruthy();
    })
})

