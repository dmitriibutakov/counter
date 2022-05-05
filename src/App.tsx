import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import CounterSet from "./components/CounterSet/CounterSet";
import CounterInc from "./components/CounterInc/CounterInc";

export type ErrorType = 'set' | 'inc'
function App() {
    const [minLimit, setMinLimit] = useState<number>(0)
    const [maxLimit, setMaxLimit] = useState<number>(5)
    const [count, setCount] = useState<number>(minLimit)
    const [error, setError] = useState<ErrorType>('set')

  useEffect(() => {
    let minLimitValue = localStorage.getItem('minLimit')
    if (minLimitValue) {
        setCount(JSON.parse(minLimitValue))
        setMinLimit(JSON.parse(minLimitValue))
    }
    let maxLimitValue = localStorage.getItem('maxLimit')
      maxLimitValue && setMaxLimit(JSON.parse(maxLimitValue))
      let startError = localStorage.getItem('error')
      startError && setError(JSON.parse(startError))
}, [])

    useEffect(() => {
        localStorage.setItem('minLimit', JSON.stringify(minLimit))
        localStorage.setItem('maxLimit', JSON.stringify(maxLimit))
        localStorage.setItem('error', JSON.stringify(error))
    }, [minLimit,maxLimit, error])

    const countUp = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minLimit)
    }
    const onChangeHandlerMax = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxLimit(e.currentTarget.valueAsNumber)
        setError("inc")
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setMinLimit(e.currentTarget.valueAsNumber)
        setError("inc")
    }
    const setLocalStorage = () => {
        setError("set")
        setCount(minLimit)
    }
    const classCounter = s.counter
    return (
        <div className={s.app}>
            <CounterSet
                classCounter={classCounter}
                error={error}
                setLocalStorage={setLocalStorage}
                maxLimit={maxLimit}
                minLimit={minLimit}
                onChangeHandlerMax={onChangeHandlerMax}
                onChangeHandlerStart={onChangeHandlerStart}
            />
            <CounterInc error={error}
                        minLimit={minLimit}
                        maxLimit={maxLimit}
                        count={count}
                        countUp={countUp}
                        resetCount={resetCount}
                        classCounter={classCounter}
                        />
        </div>
    );
}

export default App;
