

import React, { FC, SetStateAction } from 'react'

export type RequestInputProps<T extends string | number> = {
    type: "text" | "number" | "password" | "email" | "tel" | "url";
    value: T | undefined;
    placeholder: string;
    setValue: (value: SetStateAction<T | undefined>) => void;
}

export const RequestInput: <T extends string | number>(props: RequestInputProps<T>) => JSX.Element = ({ type, value, placeholder, setValue }) => {
    return (
        <input type={type} value={value} onChange={(event) => setValue(event.target.value as typeof value)} placeholder={placeholder}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </input>
    )
}
