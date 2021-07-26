import React, { useEffect, useState } from "react";
import { SummaryRowTipAmount } from "../summary-row-tip-amount/SummaryRowTipAmount";
import { SummaryRowTotal } from "../summary-row-total/SummaryRowTotal";
import { calculateTip, calculateTotalCost } from "../../helpers/helpers";
import { useStore } from "../../store/store";

export const Summary = () => {
    const store = useStore();

    const [tipAmountCost, setTipAmountCost] = useState("");
    const [totalCost, setTotalCost] = useState("");

    useEffect(() => {
        setTipAmountCost("0.00");
        setTotalCost("0.00");

        const tipAmount = store.tipAmountCustom
            ? store.tipAmountCustom
            : store.tipAmount
            ? store.tipAmount
            : "";

        if (!tipAmount || !store.peopleAmount || !store.billAmount) return;

        setTotalCost(
            calculateTotalCost(store.billAmount, tipAmount, store.peopleAmount)
        );
        setTipAmountCost(
            calculateTip(store.billAmount, tipAmount, store.peopleAmount)
        );
    }, [
        store.billAmount,
        store.tipAmount,
        store.peopleAmount,
        store.tipAmountCustom,
    ]);

    return (
        <React.Fragment>
            <SummaryRowTipAmount cost={tipAmountCost} />
            <SummaryRowTotal cost={totalCost} />
            <button className="reset-button" onClick={store.resetStore}>
                Reset
            </button>
        </React.Fragment>
    );
};
