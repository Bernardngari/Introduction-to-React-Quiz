import React, {useEffect,useState} from "react";
import {Logo,image}from './Logo.js';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];


//[=========comment this out after completion and uncomment code below it to proceed================]


//function Child(){
//  return <div className="child">This is children content</div>;
//}



//[=========Challenge: Uncomment this code to complete quiz=====================]

function Child({updater}) {
  return (
    <>
      <div className="child">Child</div>
      <button onClick={updater}>Change Parent Value</button>
    </>
  );
}

function Parent({hider}) {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

 const [showParent, setShowParent] = useState(true);
 
function updateParent(){
setValue("Bless you Mama!")
}

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child updater={updateParent}/>
      </div>
    </>
  );
}

//[====================Uncomment this to tackle quiz=======================================]


// Comment out after completion
//function Parent({children}) {
//  return (
//    <div className="parent">
//      <h3>Parent Component</h3>
//      {children}
//    </div>
//  );
//}
// Comment above code after completion

function App() {
  
const user = users.map((data)=><li key={data.id}>{data.name}</li>)
  return (
    <>
    
    <img src={image} style={{height:100}} className="App-logo" alt="logo" />
    <Logo />
      <h3>User names</h3>
      <ul>{user}</ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
       <Child />
      </Parent>
      
    </>
  );
}

export default App;
