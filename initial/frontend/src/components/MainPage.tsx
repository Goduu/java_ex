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
    return (
        <>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Requester title="Hello World" description="Fetch Hello World" url="" setAnswer={setAnswer} />
                <SumNumberRequest setAnswer={setAnswer} />
                <CompareNumbers setAnswer={setAnswer} />
                <LetterNumbersMappingArray setAnswer={setAnswer} />
                <SortNumbers setAnswer={setAnswer} />
            </div>
            <RequestAnswer answer={answer} />
        </>
    )
}

