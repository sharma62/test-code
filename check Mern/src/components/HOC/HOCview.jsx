import { useEffect, useState } from 'react';
import { Home } from './Home';
import { withLoading } from './withLoading'
import { withLayout } from './withLayout';
import { withAuth, withRole } from './withAuth';

const HomeListWithLoading = withLoading(Home)
const HomeListWithLayout = withLayout(Home)

const HomeWithAuth = withAuth(Home)

//start withRole called & here pass Home component as argument  (this component initially no send any props )
const HomeWithRole = withRole(Home)
// HomeWithRole is component (due to withRole() return component ) we use futher


/*
  thought process to make Hoc and use --

  1. which component u wnat to enhance or make protact who send pass as args of HOC Ex-  withRole(Home)
  2. which const 'HomeWithRole' (after returning withRole(Home) this variable behave as component ) u want to re-use or increase their security and use

*/ 
export function HOCview() {
    const style = {
        color: "red",
        fontSize:"10px"

    }
    const users = [
        { id: 111, name: "admin" },
        { id: 1, name: "Ram" },
        { id: 2, name: "Supa" },
    ];
    const [loading, setLoadig] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadig(false)
        }, 5000);
    })
    return (
        <>
            <h1>HOC view </h1>
            {/* <HomeListWithLoading loading={loading} users={users} />
            <HomeListWithLayout loading={loading} style={style} /> */}

            {/* <HomeWithAuth users={users}/> */}

            <HomeWithRole user ="sk" />

            

        </>
    )
}