import produce from "immer";
import create from "zustand";

interface StoreModel {
    billAmount: string;
    tipAmount: string;
    tipAmountCustom: string;
    peopleAmount: string;
    setBillAmount: (amount: string) => void;
    setTipAmount: (amount: string) => void;
    setTipAmountCustom: (amount: string) => void;
    setPeopleAmount: (amount: string) => void;
    resetStore: () => void;
}

export const useStore = create<StoreModel>((set) => ({
    billAmount: "",
    tipAmount: "",
    tipAmountCustom: "",
    peopleAmount: "",
    setBillAmount: (amount) =>
        set(
            produce((state) => {
                const onlyNumbersRegexp = new RegExp("^[0-9]*$");

                if (!onlyNumbersRegexp.test(amount)) return;
                if (state.billAmount === "0" && amount === "00") return;

                state.billAmount = amount;
            })
        ),
    setTipAmount: (amount) =>
        set(
            produce((state) => {
                const max100 = new RegExp("^(100|[1-9]?[0-9])$");

                if (amount === "") {
                    state.tipAmount = "";
                }

                if (!max100.test(amount)) return;

                state.tipAmount = amount;
            })
        ),
    setTipAmountCustom: (amount) =>
        set(
            produce((state) => {
                const max100 = new RegExp("^(100|[1-9]?[0-9])$");

                if (amount === "") {
                    state.tipAmountCustom = "";
                }

                if (!max100.test(amount)) return;

                state.tipAmountCustom = amount;
            })
        ),
    setPeopleAmount: (amount) =>
        set(
            produce((state) => {
                const onlyNumbersRegexp = new RegExp("^[0-9]*$");

                if (!onlyNumbersRegexp.test(amount)) return;
                if (state.peopleAmount === "0" && amount === "00") return;

                state.peopleAmount = amount;
            })
        ),
    resetStore: () =>
        set(
            produce((state) => {
                state.billAmount = "";
                state.tipAmount = "";
                state.tipAmountCustom = "";
                state.peopleAmount = "";
            })
        ),
}));
