import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActionsBill } from "./ActionsBill";

describe("Tests for Actions Bill", () => {
    it("should render", () => {
        render(<ActionsBill />);
        const labelEl = screen.getByText(/Bill/i);
        expect(labelEl).toBeInTheDocument();
    });

    it("should be able to write in input field", () => {
        render(<ActionsBill />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "123");
        expect(inputField).toHaveValue("123");
    });

    it("should only take numbers", () => {
        render(<ActionsBill />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "H");
        expect(inputField).toHaveValue("");
    });

    it("should show error if value is zero", () => {
        render(<ActionsBill />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "0");
        const errorAlertElement = screen.getByText("Can't be zero");
        expect(errorAlertElement).toBeInTheDocument();
    });
});
