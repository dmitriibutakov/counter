import React from 'react';
import s from "../../App.module.css";
import UniversalBtn from "../UniversalBtn";
import Count from "../Count";
import {ErrorType} from "../../App";

type CounterIncType = {
    classCounter: string
    error: ErrorType
    minLimit: number
    maxLimit: number
    count: number
    countUp: () => void
    resetCount: () => void
}
const CounterInc: React.FC<CounterIncType> = ({
                                                  classCounter,
                                                  error,
                                                  minLimit,
                                                  maxLimit,
                                                  count,
                                                  countUp,
                                                  resetCount
                                              }) => {
    return (
        <div className={classCounter}>
            <div>
                <UniversalBtn green
                              setDisabled={count >= maxLimit || error === "inc"}
                              name={"plus"}
                              onClick={countUp}/>

                <UniversalBtn setDisabled={count === minLimit || error === "inc"}
                              name={"reset"}
                              onClick={resetCount}/>
            </div>
            <Count error={error} minLimit={minLimit} limit={maxLimit} count={count}/>
        </div>
    );
};

export default CounterInc;
