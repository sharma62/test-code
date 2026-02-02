import { useEffect, useLayoutEffect } from "react"

export function LayoutEffect(){
    // console.log('render phase & mount phase ')
    
    // useEffect(()=>{
    //     console.log('re-render phase & update phase  ')
    //     return ()=>{
    //         console.log('remove phase & up-mount phase  ')
    //     }
    // })
      console.log('render phase & mount phase ')
    useLayoutEffect(()=>{
        console.log('re-render phase & update phase  ')
        return ()=>{
            console.log('remove phase & up-mount phase  ')
        }
    })
    return (
        <>
        <h1>Layout effect</h1>
        </>
    )
    
}