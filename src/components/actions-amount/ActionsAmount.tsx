import React from "react";
import { useStore } from "../../store/store";
import Person from "./icon-person.svg";

export const ActionsAmount = () => {
    const setPeopleAmount = useStore((store) => store.setPeopleAmount);
    const inputValue = useStore((store) => store.peopleAmount);

    return (
        <div className="actions-amount">
            <label className="actions-label" htmlFor="amount">
                Number of people
            </label>
            <div
                className={[
                    "form-input",
                    `${inputValue === "0" ? "has-error" : ""}`,
                ].join(" ")}
            >
                <div className="form-input__overlay">
                    <img src={Person} alt="Person" />
                </div>
                <div className="form-input__input">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="0"
                        id="amount"
                        value={inputValue}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            const val = event.target.value;
                            setPeopleAmount(val);
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
