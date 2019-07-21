import React, { useState }from 'react';
// import './App.css';
import NavBar from '../src/components/ui/Navbar';
import Home from '../src/pages/home/home';
// import AvailablePuppies from './pages/availablePuppies/availablePuppies';
// import GuardianHome from './pages/guardianHome/guardianHome';
// import About from './pages/about/about';
// import ContactUs from './pages/contactUs/contactUs';

function App() {

  const [displayContent, setDisplayContent] = useState("Home");

  // this.state = {
  //         loggedIn: false,
  //         username: null
  //       }  

  const renderPage = () => {
    console.log("State-" + displayContent)
    switch (displayContent) {
      case "Home":
        return <Home />
      // case "AvailablePuppies":
      //   return <AvailablePuppies />
      // case "GuardianHome":
      //   return <GuardianHome />
      // case "About":
      //   return <About />
      // case "ContactUs":
      //   return <ContactUs />
      default:
        return <Home />
    }
  }
      return (
      
        <div className="contentSection">
          <NavBar 
      displayContent={setDisplayContent}
      />
              {renderPage()}

        </div>
      )
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedIn: false,
//       username: null
//     }
//   }