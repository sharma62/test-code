
import { Reducer } from './components/Reducer'
import './App.css'
// import { Memo } from './components/Memo'
// import { Callback } from './components/Callback'
// import { LayoutEffect } from './components/LayoutEffect'
import { CheckCustomHook } from './components/CheckCustomHook'

function App() {

  console.log('2' + '2' * '2' / 2) //2
  /*
   🔑 Rule to Remember (VERY IMPORTANT)
     -- Operator	Behavior --
          +	String concatenation if any operand is string
          -, *, /	Always convert to number
          
      🧠 One‑Line Explanation (Interview Ready)
      The + operator concatenates strings, but the - operator forces numeric conversion, which results in 22 - 2 = 20.
*/
  return (
    <>
      {/* <Reducer/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <LayoutEffect/> */}
      <CheckCustomHook />

    </>
  )
}

export default App
