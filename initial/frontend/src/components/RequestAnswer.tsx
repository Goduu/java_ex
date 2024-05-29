import React, { FC } from 'react'
import { AnswerObject } from './AnswerObject';

export type RequestAnswerProps = {
    answer: AnswerObject;
}

export const RequestAnswer: FC<RequestAnswerProps> = ({ answer }) => {
    return (
        <>
            <div
                className="lg:max-w-5xl w-full h-48 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Answer
                </h2>
                {answer.answer}
            </div>
            <div
                className="lg:max-w-5xl w-full h-48 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Code
                </h2>
                {answer.code}
            </div>
        </>

    )
}
