import React from "react";
import { useStore } from "../../store/store";
import Dollar from "./icon-dollar.svg";

export const ActionsBill = () => {
    const inputValue = useStore((store) => store.billAmount);
    const setBillAmount = useStore((state) => state.setBillAmount);

    return (
        <div className="actions-bill">
            <label htmlFor="bill" className="actions-label">
                Bill
            </label>
            <div
                className={[
                    "form-input",
                    `${inputValue === "0" ? "has-error" : ""}`,
                ].join(" ")}
            >
                <div className="form-input__overlay">
                    <img src={Dollar} alt="Bill" />
                </div>
                <div className="form-input__input">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="0"
                        id="bill"
                        value={inputValue}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            const val = event.target.value;
                            setBillAmount(val);
                        }}
                    />
                </div>
                {inputValue === "0" && (
                    <div className="form-input__error">Can't be zero</div>
                )}
            </div>
        </div>
    );
};
