import React from "react";
import {FC, useEffect, useState} from "react";

type Props = {}

type TimeType = {
    hh: string,
    mm: string,
    ss?: string
}
const Clock: FC<Props> = () => {
    const getTime = (): TimeType => {
        const date = new Date()
        const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString()
        const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString()
        return {hh, mm}
    }
    const [dateNow, setDateNow] = useState<TimeType>(getTime())
    useEffect(() => {
        setInterval(() => {
            setDateNow(getTime())
        }, 1000)
    }, [])
    return (
        <div className='text-white text-7xl font-clock'>
            {dateNow.hh}:{dateNow.mm}
        </div>
    )
}
export default Clock