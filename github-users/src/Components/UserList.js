import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const UserList = () => {
    const [param,setParam] = useState('');
    const [resStatus,setResStatus] = useState(false);
    const [userList,setUserList] = useState([]);
    

    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const apiUrl = `https://api.github.com/search/users`;
        await axios.get(apiUrl,{params:{q: param}})
        .then((response)  => {
            userList.splice(0,userList.length)
            console.log(userList)
            response.data.items.map((item) => {
                userList.push(item.login)
                
            })
            console.log(userList)
            setUserList(userList)
            setResStatus(true)
           
        });
    }
    const ListItems = (props) => {
        const users=  props.users
        console.log(props)
        const listItems = users.map((item) =>
            <li className='listAlign'>
            <Link 
            to={{pathname:"/userDetails", state: item}}
            >
                {item}
            </Link>
            </li>
        );
        return <ul>{listItems}</ul>;
    }
    return(
        <div>
            <h1>Search Github Users</h1>

        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id="header-search"
                placeholder="Search term"
                name="param"
                onChange={event => {setParam(event.target.value)}} 
            />
            <button type="submit">Search</button>
        </form>
        
        {resStatus ? <ul><ListItems users={userList}/></ul>: null} 
        </div>
        
    )
};

export default UserList;