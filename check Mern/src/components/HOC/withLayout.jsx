export function withLayout(WrappedComponent){
    return function jacket (props){
        if(props.loading){
            return <>loading layout. . . </>
        }
        
        return <WrappedComponent {...props}/>
    }
}