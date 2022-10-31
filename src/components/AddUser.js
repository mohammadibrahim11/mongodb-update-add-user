import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user)
    fetch('http://localhost:5000/users',{
      method:'POST',
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

  const handleOnBlur = (event) => {
    const value = event.target.value;
    // const fieldValue = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
    // console.log(event.target, field, fieldValue);
  };
  return (
    <div>
      user added
      <form onSubmit= {handleAddUser}>
        <input
          onChange={handleOnBlur}
          type="text"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          onChange={handleOnBlur}
          type="email"
          name="email"
          placeholder="your email"
        />
        <br />
        <input
          onChange={handleOnBlur}
          type="password"
          name="password"
          placeholder="your password"
        />
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddUser;
