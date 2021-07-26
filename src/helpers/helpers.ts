export const calculateTip = (bill: string, tip: string, people: string) => {
    const billAmount = parseFloat(bill);
    const tipAmountRaw = parseFloat(tip);
    const tipAmount = tipAmountRaw / 100;
    const peopleAmount = parseFloat(people);

    const formula = (billAmount * tipAmount) / peopleAmount;
    return formula.toFixed(2).toString();
};

export const calculateTotalCost = (
    bill: string,
    tip: string,
    people: string
) => {
    const billAmount = parseFloat(bill);
    const tipAmount = parseFloat(tip) / 100;
    const peopleAmount = parseFloat(people);

    const billPerPerson = billAmount / peopleAmount;
    const tipPerPerson = (billAmount * tipAmount) / peopleAmount;
    const totalCostPerPerson = billPerPerson + tipPerPerson;
    return totalCostPerPerson.toFixed(2).toString();
};
