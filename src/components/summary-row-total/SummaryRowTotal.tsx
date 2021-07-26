import React from "react";

interface Props {
    cost: string;
}

export const SummaryRowTotal: React.FC<Props> = ({ cost }) => {
    return (
        <div className="summary-row">
            <div className="summary-row__left">
                <div className="summary-row__title">Total</div>
                <div className="summary-row__person">/ person</div>
            </div>
            <div className="summary-row__right">${cost}</div>
        </div>
    );
};
