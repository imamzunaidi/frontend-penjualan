import logo from './logo.svg';
import React from 'react';
import Register from './pages/Resgister';
import Header from './component/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Kategori from './pages/Kategori';
import { BrowserRouter as Router, Route, Switch, useLocation  } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';

function App() {

  // Use useLocation hook to get the current route
  const location = useLocation();

  let className = ''; // Default class
  if (location.pathname === '/' || location.pathname === '/register') {
    className = ''; // Class for dashboard
  }

  return (
    
    <div className={className}>
       <Router>  
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/kategori" component={Kategori} />
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;
