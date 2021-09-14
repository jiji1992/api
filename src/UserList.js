import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListUser} from './ListUser';



export const UserList = () => {
    const [users, setUsers] = useState([]);
    //console.log(users)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then((res)=> setUsers(res.data))
     .catch((err)=>console.log(err));
    }, []);
    return (
        <div className='d-flex  justify-content-around flex-wrap '>
          {users.map(user =>   <ListUser user={user} key={user.id}/>
          )}
         
        </div>
    )
}
