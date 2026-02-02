import { useCustomHook } from "./Hooks/useCustomHook"

export function CheckCustomHook() {
    const { value, toggle } = useCustomHook()
    const { value:newValue, toggle:newToggle } = useCustomHook()
    

      return (
        <>

            <h1>CheckCustomHook {value && <span>actve</span>}{newValue &&  <span>newValue actve</span> }</h1>
            <button onClick={() => toggle()}>toggle</button>
            <button onClick={() => newToggle()}>new Toggle</button>

        </>
    )
}