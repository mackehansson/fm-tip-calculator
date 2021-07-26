import React from "react";
import { useStore } from "../../store/store";

export const ActionsTip = () => {
    const inputValue = useStore((state) => state.tipAmount);
    const setTipAmount = useStore((state) => state.setTipAmount);

    const inputValueCustom = useStore((state) => state.tipAmountCustom);
    const setTipAmountCustom = useStore((state) => state.setTipAmountCustom);

    const handleTipClick = (amount: string) => {
        setTipAmountCustom("");
        setTipAmount(amount);
    };

    const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setTipAmount("");
        setTipAmountCustom(val);
    };

    return (
        <div className="actions-tip">
            <div className="actions-label">Select tip %</div>

            <div className="actions-tip__buttons">
                <button
                    className={[
                        "tip-button",
                        `${inputValue === "5" ? "active" : ""}`,
                    ].join(" ")}
                    onClick={() => handleTipClick("5")}
                >
                    5%
                </button>
                <button
                    className={[
                        "tip-button",
                        `${inputValue === "10" ? "active" : ""}`,
                    ].join(" ")}
                    onClick={() => handleTipClick("10")}
                >
                    10%
                </button>
                <button
                    className={[
                        "tip-button",
                        `${inputValue === "15" ? "active" : ""}`,
                    ].join(" ")}
                    onClick={() => handleTipClick("15")}
                >
                    15%
                </button>
                <button
                    className={[
                        "tip-button",
                        `${inputValue === "25" ? "active" : ""}`,
                    ].join(" ")}
                    onClick={() => handleTipClick("25")}
                >
                    25%
                </button>
                <button
                    className={[
                        "tip-button",
                        `${inputValue === "50" ? "active" : ""}`,
                    ].join(" ")}
                    onClick={() => handleTipClick("50")}
                >
                    50%
                </button>
                <input
                    className={[
                        "tip-input",
                        `${inputValueCustom ? "active" : ""}`,
                    ].join(" ")}
                    type="text"
                    placeholder="Custom"
                    value={inputValueCustom}
                    onChange={handleTipChange}
                />
            </div>
        </div>
    );
};
