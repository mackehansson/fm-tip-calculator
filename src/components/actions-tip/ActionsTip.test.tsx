import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActionsTip } from "./ActionsTip";

describe("Actions Tips", () => {
    it("should render", () => {
        render(<ActionsTip />);

        const labelElement = screen.getByText(/Select tip %/i);

        expect(labelElement).toBeInTheDocument();
    });

    it("should set the 5% tip", () => {
        render(<ActionsTip />);
        const button = screen.getByText("5%");
        userEvent.click(button);
        expect(button).toHaveClass("tip-button active");
    });

    it("should set the 10% tip", () => {
        render(<ActionsTip />);
        const button = screen.getByText("10%");
        userEvent.click(button);
        expect(button).toHaveClass("tip-button active");
    });

    it("should set the 15% tip", () => {
        render(<ActionsTip />);
        const button = screen.getByText("15%");
        userEvent.click(button);
        expect(button).toHaveClass("tip-button active");
    });

    it("should set the 25% tip", () => {
        render(<ActionsTip />);
        const button = screen.getByText("25%");
        userEvent.click(button);
        expect(button).toHaveClass("tip-button active");
    });

    it("should set the 50% tip", () => {
        render(<ActionsTip />);
        const button = screen.getByText("50%");
        userEvent.click(button);
        expect(button).toHaveClass("tip-button active");
    });

    it("should set the custom tip", () => {
        render(<ActionsTip />);
        const inputElement = screen.getByPlaceholderText("Custom");
        userEvent.type(inputElement, "40");
        expect(inputElement).toHaveValue("40");
    });

    it("should only be max 100 in the custom field", () => {
        render(<ActionsTip />);
        const inputElement = screen.getByPlaceholderText("Custom");
        userEvent.type(inputElement, "101");
        expect(inputElement).toHaveValue("10");
    });
});
