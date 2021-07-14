import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path='/' component={Main} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
