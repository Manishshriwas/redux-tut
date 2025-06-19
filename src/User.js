import React from "react";

const User = (props) => {

  return <div>
    <h1>User componet </h1>
    <h3>Name : {(props.data.name)}</h3>
    <h3>Age : {(props.data.age)}</h3>
    </div>;
};  
export default User;