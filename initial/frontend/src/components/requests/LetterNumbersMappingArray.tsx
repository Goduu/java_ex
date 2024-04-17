import React, { FC, useEffect, useState } from 'react'
import { Requester } from '../Requester'
import { RequestInput } from '../RequestInput'

type LetterNumbersMappingArrayProps = {
    setAnswer: (value: string) => void
}


export const LetterNumbersMappingArray: FC<LetterNumbersMappingArrayProps> = ({ setAnswer }) => {
    const [inputValue, setInputValue] = useState<string | undefined>()

    const [body, setBody] = useState({})


    useEffect(() => {
        setBody({
            myArray: inputValue?.split(",").map(item => item.trim()),
        })
    }, [inputValue])


    return (
        <Requester title="Letter Numbers Mapping Array" description="Transform numbers from a list in letters 1=A, 2=B..." url="letterNumbersMappingArray" setAnswer={setAnswer} body={body} method='POST'
            input={
                <RequestInput type="text" placeholder="Ex: 1,2,a,5,7" value={inputValue} setValue={setInputValue} />
            } />
    )
}
