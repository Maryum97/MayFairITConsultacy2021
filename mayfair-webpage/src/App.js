import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={LandingPage} ></Route>
    </Router>
  );
}

export default App;
