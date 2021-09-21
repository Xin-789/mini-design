import { useState, useEffect } from "react";
function useDebounce(value: any, delay: number = 300) {
    const [debounceValue, setDebouncevalue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(()=>{
            setDebouncevalue(value)
        },delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debounceValue
    
}
export default useDebounce