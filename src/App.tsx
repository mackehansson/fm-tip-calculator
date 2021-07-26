import React from "react";
import { ActionsAmount } from "./components/actions-amount/ActionsAmount";
import { ActionsBill } from "./components/actions-bill/ActionsBill";
import { ActionsTip } from "./components/actions-tip/ActionsTip";
import { Logo } from "./components/logo/Logo";
import { Summary } from "./components/summary/Summary";

function App() {
    return (
        <div className="page-wrapper">
            <Logo />

            <div className="page-content">
                <div className="page-content__left">
                    <ActionsBill />
                    <ActionsTip />
                    <ActionsAmount />
                </div>

                <div className="page-content__right">
                    <Summary />
                </div>
            </div>
        </div>
    );
}

export default App;
