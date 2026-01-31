import { useMemo, useState } from "react"

export function Memo(){
    // list 1 is created
     
    const [list1 ,setList1]=useState([
        {name:"A",val:10},
        {name:"B",val:20},
        {name:"c",val:30},
        {name:"d",val:40}
    ])
   
    //   reuse cache value 

    const total_val_list1 = useMemo(()=>{
        console.log("calculate")
        let acc=0;
        list1.map((i)=>{
             acc+=i.val
        })
        return acc
    },[list1])


//   u see here useMemo remember or memoize list 1 toatal value 
    console.log(total_val_list1)
//   and here total_val_list1 + 200  total_val_list1 comming from useMemo not re-calculate 
console.log(total_val_list1+200)
//   and here alo total_val_list1 + 500  total_val_list1 comming from useMemo not re-calculate 
    console.log(total_val_list1+500)
     
// hance proved useMemo is able to memoized the value 
 
    return (
        <>
         
        </>
    )
}