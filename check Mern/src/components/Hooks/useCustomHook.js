import {  useState } from "react";

export function useCustomHook() {
    const [value, setValue] = useState(false)

    const toggle = () => {
        setValue((prev) => !prev)
    }
    return { value, toggle }

}