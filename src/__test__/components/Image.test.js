import React from "react";
import Image from "../../components/Image";
import {render} from '@testing-library/react'


describe("check image loaded correctly", () => {
    test("image should have src", () => {
        const component = render(<Image imageSource={"https://mosaic01.ztat.net/vgs/media/large/K4/45/1M/A0/6K/11/K4451MA06-K11@6.jpg"}/>);
        const image = component.getByLabelText("image");
        expect(image.src).toBe("https://mosaic01.ztat.net/vgs/media/large/K4/45/1M/A0/6K/11/K4451MA06-K11@6.jpg");
    });
})
