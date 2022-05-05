import React from 'react';
import s from "./UniversalBtn.module.css"

type BtnType = {
    name: string
    onClick: () => void
    green?: boolean
    setDisabled: boolean
}

const UniversalBtn: React.FC<BtnType> = ({
                                             name,
                                             onClick,
                                             green,
                                             setDisabled
                                         }) => {
    const setClass = ` ${setDisabled ? s.red : s.default} ${green ? s.green : s.default}`
    return (
        <button disabled={setDisabled} className={setClass}
                onClick={onClick}>
            {name}</button>
    );
};

export default UniversalBtn;