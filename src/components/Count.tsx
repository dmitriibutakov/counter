import React from 'react';
import s from "./Count.module.css"
import {ErrorType} from "../App";

type CountType = {
    count: number
    limit: number
    minLimit: number
    error: ErrorType
}
const Count: React.FC<CountType> = ({count, limit, minLimit, error}) => {
    const setClass = count === limit ? s.error : s.count
    return (
        <>
            <div className={setClass}>
                {minLimit >= limit || minLimit < 0 ? <span>incorrect value!</span>
                    : error === "inc" ? <span>set click</span>
                    : <span className={count === limit ? s.limit : ""}>{count}</span>}

            </div>
        </>
    );
};

export default Count;
