import React, { FC, useEffect, useState } from 'react'
import { Requester } from '../Requester'
import { RequestInput } from '../RequestInput'

type CompareNumbersProps = {
    setAnswer: (answer: string, id: string) => void;
    resolvedId: string
}


export const CompareNumbers: FC<CompareNumbersProps> = ({ setAnswer, resolvedId }) => {
    const [number1, setNumber1] = useState<number | undefined>()
    const [number2, setNumber2] = useState<number | undefined>()

    const [body, setBody] = useState({})


    useEffect(() => {
        setBody({
            number1: number1,
            number2: number2,
        })
    }, [number1, number2])

    return (
        <Requester
            title="compareNumbers"
            description="Compare two numbers"
            url="compareNumbers"
            setAnswer={setAnswer}
            body={body}
            method='POST'
            resolved={resolvedId === "compareNumbers"}
            input={<>
                <RequestInput type="number" placeholder="n1" value={number1} setValue={setNumber1} />
                <RequestInput type="number" placeholder="n2" value={number2} setValue={setNumber2} />
            </>} />
    )
}
