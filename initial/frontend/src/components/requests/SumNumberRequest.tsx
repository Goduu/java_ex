import { FC, useEffect, useState } from "react"
import { Requester } from "../Requester"
import { RequestInput } from "../RequestInput"

type SumNumberRequestProps = {
    setAnswer: (value: string) => void
}

export const SumNumberRequest: FC<SumNumberRequestProps> = ({ setAnswer }) => {
    const [number1, setNumber1] = useState<string | undefined>("")
    const [number2, setNumber2] = useState<number | undefined>()
    const [number3, setNumber3] = useState<number | undefined>()

    const [body, setBody] = useState({})

    useEffect(() => {
        setBody({
            number1: number1,
            number2: parseFloat(number2?.toString() || "0"),
            number3: parseInt(number3?.toString() || "0")
        })
    }, [number1, number2, number3])

    return (
        <Requester title="Sum Int, Float & Str" description="Parse and sum a int, float and string" url="numberParsing" setAnswer={setAnswer} body={body} method='POST'
            input={<>
                <RequestInput type="text" placeholder="str" value={number1} setValue={setNumber1} />
                <RequestInput type="number" placeholder="float" value={number2} setValue={setNumber2} />
                <RequestInput type="number" placeholder="int" value={number3} setValue={setNumber3} />
            </>} />
    )
}