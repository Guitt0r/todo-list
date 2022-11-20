import {useEffect, useState} from "react";

const Clock = () => {
    const getTime = () => {
        const date = new Date()
        const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        const mm = date.getMinutes()< 10 ? `0${date.getMinutes()}` : date.getMinutes()
        return {hh, mm}
    }
    const [dateNow, setDateNow] = useState(getTime())
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