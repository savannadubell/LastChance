
import React from 'react'; 
// import React, { useState, Component }from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../src/components/ui/Navbar';
import Footer from '../src/components/ui/Footer'
import Home from './pages/home/home';
// import Shop from './pages/availablePuppies/availablePuppies';
// import GuardianHome from './pages/guardianHome/guardianHome';
import About from './pages/about/about';
// import ContactUs from './pages/contactUs/contactUs';

const App = () => {
return (
  <Router>
    <div>
     <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} /> 
          {/* <Route path="/shop" component={AvailablePuppies} /> */}
          {/* <Route exact path="/GuardianHome" component={GuardianHome} /> */}
          {/* <Route exact path="/ContactUs" component={ContactUs} />  */}
        </Switch>
      <Footer />
    </div>
  </Router>
)};

export default App;