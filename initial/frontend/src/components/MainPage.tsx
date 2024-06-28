"use client"
import React, { useState } from 'react'
import { Requester } from './Requester'
import { RequestAnswer } from './RequestAnswer'
import { SumNumberRequest } from './requests/SumNumberRequest'
import { CompareNumbers } from './requests/CompareNumbers'
import { LetterNumbersMappingArray } from './requests/LetterNumbersMappingArray'
import { SortNumbers } from './requests/SortNumbers'
import { AnswerObject } from './AnswerObject'

export const MainPage = () => {
    const [answer, setAnswer] = useState<AnswerObject>({ answer: "", code: "" })
    const [resolvedId, setResolvedId] = useState("")

    const handleSetAnswer = (answer: AnswerObject, id: string) => {
        setAnswer(answer)
        setResolvedId(id)
    }


    return (
        <div className='flex flex-col gap-8 py-15'>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
                <Requester title="helloWorld" description="Fetch Hello World" url="" setAnswer={handleSetAnswer} resolved={resolvedId === "helloWorld"} />
                <SumNumberRequest setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <CompareNumbers setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <LetterNumbersMappingArray setAnswer={handleSetAnswer} resolvedId={resolvedId} />
                <SortNumbers setAnswer={handleSetAnswer} resolvedId={resolvedId} />
            </div>

            <RequestAnswer answer={answer} />
        </div>
    )
}

// https://medium.com/spring-boot/free-hosting-bliss-deploying-your-spring-boot-app-on-render-d0ebd9713b9d
