"use client"
import React, { FC, ReactNode, useState } from 'react'
import { AnswerObject } from './AnswerObject';
import { InputPopover } from './InputPopover';


type ResponseEntity = {
    headers: { [key: string]: any };
    body: string;
    statusCode: string;
    statusCodeValue: number;
}

type ApiResponse = {
    responseEntity: ResponseEntity;
    code: string;
}

export type RequesterProps = {
    title: string;
    description: string;
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: string | object
    input?: ReactNode
    resolved?: boolean
    setAnswer: (answer: AnswerObject, id: string) => void;
}
const defaultURL = "http://localhost:8080/"

export const Requester: FC<RequesterProps> = ({ title, description, url, setAnswer, method = "GET", body, input, resolved }) => {
    const [open, setOpen] = useState(false)

    const handleClick = async () => {

        await fetch(defaultURL + url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined
        }).then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Read the body of the response as text

            return response.json();
        })
            .then(data => {
                // Use the data from the response body
                console.log(data);
                const apiResponse: ApiResponse = data
                setAnswer({
                    code: apiResponse.code,
                    answer: apiResponse.responseEntity.body
                }, title)
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    return (
        <>
            <button
                className={`group rounded-lg border ${resolved ? "border-x-lime-500" : "border-transparent"} px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer`}
                onClick={() => setOpen(true)}
            >
                <h2 className={`mb-3 text-2xl font-semibold truncate`}>
                    {title}
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    {description}
                </p>
            </button>
            <InputPopover open={open} description={description} input={input} sendRequest={handleClick} onClose={() => setOpen(false)} />
        </>
    )
}
