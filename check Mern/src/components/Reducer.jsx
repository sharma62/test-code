import { useReducer ,useState} from "react"

export function Reducer(){

 // const [count, setCount] = useState(0)
  // function add() {
  //   return setCount((count) => count + 1)
  // }

  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === 'add')
      return {count : state.count + 1}
    else if(action.type==='sub')
      if(state.count > 0)
      return { count : state.count-1}
      else
        return {count:0}
    else
      return {count:0}

  }, { count: 0 })
    return (
       <>
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is</p>
        <button onClick={() => dispatch({type:'add'})}>
            ^ 
        </button> 
        <button onClick={()=> dispatch({type:'sub'})}> v  </button>
        <p>
        {state.count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    )
}