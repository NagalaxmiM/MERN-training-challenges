import React, { useState } from 'react';
import axios from 'axios'



const UserDetails = (props) => {    
    const [resStatus,setResStatus] = useState(false)
    const [resData, setResData] = useState([])
    const [imgUrl,setImgUrl] = useState('')


    const apiUrl = `https://api.github.com/users/${props.location.state}`
    axios.get(apiUrl)
    .then((response) => {
        setResData([['login: ',response.data.login],['type: ',response.data.type],['repos_url: ',response.data.repos_url]])
        setImgUrl(response.data.avatar_url)
        setResStatus(true)

    }) 
    .catch((err) => {console.log(err)} )


    const ListItems = (props) => {
        const resData=  props.resData
        const listItems = resData.map((item) =>
            <li className='listAlign'>{item}</li>
        );
        listItems.push(<img src={imgUrl} width="500" height="500"></img>)

        return <li>{listItems}</li>;
    }

   
    return(
        <div>
            <h1>User Information</h1>
            {resStatus ? <ul><ListItems resData={resData}/></ul>: null}   
        </div>
    )
};

export default UserDetails;