import React from 'react'; 
// import React, { useState, Component }from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../src/components/ui/Navbar';
import Home from './pages/home/home';
// import AvailablePuppies from './pages/availablePuppies/availablePuppies';
// import GuardianHome from './pages/guardianHome/guardianHome';
// import About from './pages/about/about';
// import ContactUs from './pages/contactUs/contactUs';

const App = () => {
return (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          { /* <Route exact path="/About" component={About} />
          <Route exact path="/AvailablePuppies" component={AvailablePuppies} />
          <Route exact path="/GuardianHome" component={GuardianHome} />
          <Route exact path="/ContactUs" component={ContactUs} /> */}
        </Switch>
    </div>
  </Router>
);
}

export default App;

