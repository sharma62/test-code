export function withAuth(WrappedComponent) {
    return function auth(props) {
        // logic of auth
        console.log(props)
        return <WrappedComponent {...props} />
    }
}              
                      //wrappedcomponent = Home (no props sended by Home ) 
export function withRole(WrappedComponent) {
    return function role(props) { // this props sended is by withAuth() component
        const loggedIn = true // true nd false
        if (loggedIn) {
            return <>Welcome Guest</>
        } else {
            return <WrappedComponent {...props} />// Home component retrun with respactive props (because of Refrence ( Werppedomponent = Home))
        }
    }
}