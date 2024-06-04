
import React, { FC, ReactNode } from 'react'
import { HiOutlinePlay, IoMdClose } from './Icons'

type InputPopOverProps = {
    open: boolean
    description: string
    sendRequest: () => void
    onClose: () => void
    input?: ReactNode
}

export const InputPopover: FC<InputPopOverProps> = ({ open, description, sendRequest, onClose, input }) => {

    const handleRequest = () => {
        sendRequest()
        onClose()
    }

    return (
        <div className={`${open ? "absolute" : "hidden"} w-auto z-50 flex flex-col gap-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border px-5 py-4 transition-colors bg-neutral-800 bg-opacity-90 items-center justify-center`}>
            <div>
                <button className='absolute top-2 right-2' onClick={onClose}>
                    <IoMdClose className='w-7' />
                </button>
            </div>
            <div className={`m-0 max-w-[30ch] text-xl`}>
                {description}
            </div>
            <div className='flex flex-col gap-2'>
                {input || "This request has no inputs"}
            </div>
            <div className='flex gap-4'>
                <button className='border rounded-md p-2 hover:bg-slate-500 hover:bg-opacity-90 text-lg' onClick={handleRequest}>
                    Send Request
                    <HiOutlinePlay className='w-10 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none' />
                </button>
            </div>
        </div>
    );
}
