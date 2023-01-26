import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data = await response.json()

            setData(data)
            setIsLoading(false)
        })()
    }, [])

    return {
        data,
        isLoading,
    }
}