"use client"
import React, { FC, useRef } from 'react'
import { AnswerObject } from './AnswerObject';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';

export type RequestAnswerProps = {
    answer: AnswerObject;
}

export const RequestAnswer: FC<RequestAnswerProps> = ({ answer }) => {
    const editorRef = useRef(null);

    return (
        <div className='flex flex-col gap-2'>
            <div
                className="lg:max-w-5xl w-full h-auto group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Answer
                </h2>
                {answer.answer}
            </div>

            <div
                className="lg:max-w-5xl w-full h-auto group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Code
                </h2>
                <CodeMirror value={answer.code} ref={editorRef} height={"auto"} theme={"dark"} extensions={[java()]} />
            </div>
        </div>

    )
}
