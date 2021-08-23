
import './App.css';
import Navbar from './Navbar';
import App from './App';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React,{useState} from 'react';

function App2() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#669999';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <>
    <Router>
   <Navbar title="Open ToDo-List" mode={mode} toggleMode={toggleMode} />
   <div className="container my-10">
     <Switch>
       <Route exact path="/App">
       <App />
       </Route>
     </Switch>
  </div>
  </Router>
    </> 
    </>   
  );
 
}

export default App2;

