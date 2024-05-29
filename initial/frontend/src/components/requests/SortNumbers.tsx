import React, { FC, useEffect, useState } from 'react'
import { Requester } from '../Requester'
import { RequestInput } from '../RequestInput'
import { AnswerObject } from '../AnswerObject';

type LetterNumbersMappingArrayProps = {
    setAnswer: (answer: AnswerObject, id: string) => void;
    resolvedId: string
}


export const SortNumbers: FC<LetterNumbersMappingArrayProps> = ({ setAnswer, resolvedId }) => {
    const [inputValue, setInputValue] = useState<string | undefined>()

    const [body, setBody] = useState({})


    useEffect(() => {
        setBody({
            myArray: inputValue?.split(",").map(item => item.trim()),
        })
    }, [inputValue])


    return (
        <Requester
            title="sortNumbers"
            description="Use quick sort to sort a list of numbers"
            url="sortNumbers"
            setAnswer={setAnswer}
            body={body} method='POST'
            resolved={resolvedId === "sortNumbers"}
            input={
                <RequestInput type="text" placeholder="Ex: 1,2,10,5,7" value={inputValue} setValue={setInputValue} />
            } />
    )
}
