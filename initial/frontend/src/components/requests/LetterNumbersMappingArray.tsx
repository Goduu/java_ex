import React, { FC, useEffect, useState } from 'react'
import { Requester } from '../Requester'
import { RequestInput } from '../RequestInput'

type LetterNumbersMappingArrayProps = {
    setAnswer: (answer: string, id: string) => void;
    resolvedId: string
}


export const LetterNumbersMappingArray: FC<LetterNumbersMappingArrayProps> = ({ setAnswer, resolvedId }) => {
    const [inputValue, setInputValue] = useState<string | undefined>()

    const [body, setBody] = useState({})


    useEffect(() => {
        setBody({
            myArray: inputValue?.split(",").map(item => item.trim()),
        })
    }, [inputValue])


    return (
        <Requester
            title="letterNumbersMappingArray"
            description="Transform numbers from a list in letters 1=A, 2=B..."
            url="letterNumbersMappingArray"
            setAnswer={setAnswer}
            body={body}
            method='POST'
            resolved={resolvedId === "letterNumbersMappingArray"}
            input={
                <RequestInput type="text" placeholder="Ex: 1,2,a,5,7" value={inputValue} setValue={setInputValue} />
            } />
    )
}
