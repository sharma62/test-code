import { useCallback, useState } from "react"


export function Callback() {
    const [count, setCount] = useState(0)

    const incrementWithCallback = useCallback(() => {
        console.log("incrementWithCallback + 1")
        setCount((perv) => perv + 1)
    },[count])
    
    // const incrementWithoutCallback = () =>{
    //     console.log(" incrementWithoutCallback  + 1")
    //     setCount((prev)=> prev+1)
    // }

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>incrementWithCallback()}>+</button>    
        </>
    )

}