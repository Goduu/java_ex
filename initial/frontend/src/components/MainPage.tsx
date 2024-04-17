"use client"
import React, { useState } from 'react'
import { Requester } from './Requester'
import { RequestAnswer } from './RequestAnswer'
import { SumNumberRequest } from './requests/SumNumberRequest'
import { CompareNumbers } from './requests/CompareNumbers'
import { LetterNumbersMappingArray } from './requests/LetterNumbersMappingArray'
import { SortNumbers } from './requests/SortNumbers'

export const MainPage = () => {
    const [answer, setAnswer] = useState("")
    const [resolvedId, setResolvedId] = useState("")

    const handleSetAnswer = (answer: string, id: string) => {
        setAnswer(answer)
        setResolvedId(id)
    }


    return (
        <>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
                <Requester title="helloWorld" description="Fetch Hello World" url="" setAnswer={handleSetAnswer} resolved={resolvedId === "helloWorld"} />
                <SumNumberRequest setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <CompareNumbers setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <LetterNumbersMappingArray setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <SortNumbers setAnswer={handleSetAnswer} resolvedId={resolvedId} />
            </div>
            <RequestAnswer answer={answer} />
        </>
    )
}

