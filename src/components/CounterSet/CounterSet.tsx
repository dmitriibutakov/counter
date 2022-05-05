import React, {ChangeEvent} from 'react';
import s from "./CounterSet.module.css";
import UniversalBtn from "../UniversalBtn";
import {ErrorType} from "../../App";

type CounterSetType = {
    setLocalStorage: () => void
    minLimit: number
    maxLimit: number
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    classCounter: string
    error: ErrorType
}
const CounterSet: React.FC<CounterSetType> = ({
                                                  setLocalStorage,
                                                  classCounter,
                                                  minLimit,
                                                  maxLimit,
                                                  onChangeHandlerMax,
                                                  onChangeHandlerStart,
                                                  error
                                              }) => {

    return (
        <div className={classCounter}>
            <div className={s.values}>
                <div className={s.value}>
                    <div className={s.value__name}>max value</div>
                    <input className={s.inputSet}
                           value={maxLimit}
                           onChange={onChangeHandlerMax}
                           type={"number"}/>
                </div>
                <div className={s.value}>
                    <span className={s.value__name}>start value</span>
                    <input className={s.inputSet}
                           value={minLimit}
                           onChange={onChangeHandlerStart}
                           type={"number"}/>
                </div>
            </div>
            <UniversalBtn name={"set"}
                          onClick={setLocalStorage}
                          setDisabled={error === "set" || (minLimit >= maxLimit || minLimit < 0)}/>
        </div>
    );
};

export default CounterSet;
