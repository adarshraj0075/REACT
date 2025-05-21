import { createContext, useState } from 'react'
import './App.css'
import Parent from './Components/Parent';

//for ContextAPI we have to remember CPC
//CPC
//Create--> Create context --> to create a global context 
//                         React.createContext();
//Provider--> Provide the data to the components
//Consume-->Compnents will read data
// for reading the data we have a hook
// name of the hook --> useContext(nameOfTheContext);

export const userContext=createContext(); //step1 : createContext

function Box({children}){
  return(
    <div style={{border:"2px solid red", padding:"10px",margin:"10px"}}>
      {children}
    </div>
  )
}

function App() {
  const [user,setUser]=useState("Adarsh");

  return(
    <>
    <Box>
    <userContext.Provider value={user}>
      <Parent/>
    </userContext.Provider>
    </Box>
    </>   
   
  )

  //return <Parent users={user}/>;
  
}

// function Parent({users}){
 
//   return <Child user={users}/>
// }

// function Child({user}){
//   return <GrandChild users={user}/>
// }

// function GrandChild({users}){
//   //prop drilling has its own propblem for ex=>
//   // while sharing data if any component got broke 
//   // then the data will not be able to share 
//   // To fix these issue we have to use ContextAPI
//   return(<>
//   <h1>Hello, {users}</h1>
//   <h2>Above is the example of prop Drilling </h2>
//   </>) 

// }
export default App
