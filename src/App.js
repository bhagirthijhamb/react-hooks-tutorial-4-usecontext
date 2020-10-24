import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/About'; 
import { UserContext } from './useContext';

// How you can store a user in the context and share it throughout your application
// We  will useContext hook to do just that

// we want to get the current user on both the Home page and the About page
// First we create context to share between my components
function App() {
  const [value, setValue] = useState('hello from context');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
        
      
      {/* <UserContext.Provider value='hello from context'> */}
      <UserContext.Provider value={{value, setValue}}>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
