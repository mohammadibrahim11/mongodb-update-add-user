import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateUser = useLoaderData();

    const [user, setUser] = useState({});
    // const handleUpdateUser: (event:anry)=> void

    const handleUpdateUser = (event) => {
      event.preventDefault();
      console.log(user)
      fetch(`http://localhost:5000/users/${updateUser._id}`,{
        method:'PUT',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(user)
  
      })
      .then(res =>res.json())
      .then(data => {
        if(data.acknowledged){
         alert('user added successfully');
        event.target.reset();
        }
      }); 
  
      
    };
  
    const handleUpdateOnChange = (event) => {
    //   const value = event.target.value;
      const fieldValue = event.target.value;
      const field = event.target.name;
      const newUser = { ...user };
      newUser[field] = fieldValue;
      setUser(newUser);
      console.log(newUser);
      // console.log(event.target, field, fieldValue);
    };
    return (
        <div>
            update <span style={{color:'red'}}>{updateUser.name}</span> information

            <form onSubmit= {handleUpdateUser}>
        <input
          onChange={handleUpdateOnChange}
          type="text"
          name="name"
          defaultValue={updateUser.name}
          placeholder="your name"
        />
        <br />
        <input
          onChange={handleUpdateOnChange}
          type="email"
          name="email"
          defaultValue={updateUser.email}
          placeholder="your email"
        />
        <br />
        <input
          onChange={handleUpdateOnChange}
          type="password"
          name="password"
          defaultValue={updateUser.password}
          placeholder="your password"
        />
        <br />
        <button type="submit">add</button>
      </form>

        </div>
    );
};

export default Update;