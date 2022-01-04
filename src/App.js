import { useState } from 'react/cjs/react.development';
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { render } from "react-dom";

import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    {/* <router>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 


<div className="container">
  
<Router>
      
        <Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          
          <Route path="/" element={<TextForm/>} >
          {/* <TextForm heading="Enter the text below"/> */}
          </Route>
        </Routes>
        
    </Router>
            
  
 
  </div>
  {/* </router> */}

</>
  );
}


export default App;
