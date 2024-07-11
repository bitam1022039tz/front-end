import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/LoginForm';
import RegistrationForm from './Pages/RegistrationForm';
import Dashboard from './Pages/Dashboard';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';





// import { UserProvider } from './UserContext';

function App() {
  return (
    
      <Router>
        
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            
            <Route path="/Dashboard" element={<DashboardFull />} />

            
            
            
            
          </Routes>
       
      </Router>
    
  );
}
const DashboardFull = () =>{
    return (
      <div>
          <div>
              <Header/>
          </div>
          <div>
              <Dashboard/>
              <Sidenav/>
          </div>
      </div>

    );
}



export default App;
