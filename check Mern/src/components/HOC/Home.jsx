export function Home(props) { // this props is sended by wrrappedComponent which is return by withAuth.jsx ka withRole() because withRole() return  <WrappedComponent {...props} />
  console.log(props.user)
   return (
    <div>
      <h2  style={props.style}>Home List</h2>
      {/* {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))} 
       */}
    </div>
  );
}

