import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActionsAmount } from "./ActionsAmount";

describe("Tests for Actions Bill", () => {
    it("should render", () => {
        render(<ActionsAmount />);
        const labelEl = screen.getByText(/Number of people/i);
        expect(labelEl).toBeInTheDocument();
    });

    it("should be able to write in input field", () => {
        render(<ActionsAmount />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "123");
        expect(inputField).toHaveValue("123");
    });

    it("should only take numbers", () => {
        render(<ActionsAmount />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "Hejsan hoppsan");
        expect(inputField).toHaveValue("");
    });

    it("should show error if value is zero", () => {
        render(<ActionsAmount />);
        const inputField = screen.getByPlaceholderText(/0/i);
        userEvent.type(inputField, "0");
        const errorAlertElement = screen.getByText("Can't be zero");
        expect(errorAlertElement).toBeInTheDocument();
    });
});
