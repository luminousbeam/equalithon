import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/landingPage/Home';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import './App.css';
import RegistrationGroup from './components/RegistrationGroup';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={RegistrationForm} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/group-registration" exact component={RegistrationGroup} />
       
      </Router>
    </div>
  );
}

export default App;