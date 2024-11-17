import React,{useState} from 'react';

function MyComponent() {
    const [name,setName] = useState("Don");
  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={()=>setName("John")}>Set Name</button>
    </div>
  );
}

export default MyComponent;