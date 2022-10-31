import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);



    const handleDelete=(user)=>{

        const agree = window.confirm(`are you sure?you want to delete ${user.name}`);
        // console.log(agree);
        if(agree){
            // console.log('deleting user id ', user._id) 
          fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE',

          })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert('user deleted successfully.');
                const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                setDisplayUsers(remainingUsers);
            }
        })
        }
  
          
    }
    
    return (
        <div>
            <h2>users:{displayUsers.length}</h2>
            {
                displayUsers.map(user => <p key={user._id}>{user.name}
                 <br /> {user.email} <Link to={`/update/${user._id}`}><button>update </button></Link> <button onClick={()=>handleDelete(user)}>x</button> </p>)
                
            }
        </div>
    );
};

export default Home;