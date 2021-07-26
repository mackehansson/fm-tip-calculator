import React from "react";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

test("if logo is rendering", async () => {
    render(<Logo />);
    const imageElement = await screen.findAllByAltText("Splitter");
    for (let i = 0; i < imageElement.length; i++) {
        const element = imageElement[i];
        expect(element).toBeInTheDocument();
    }
});
