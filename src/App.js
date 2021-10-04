
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import About from './Components/About/About';
import Error from './Components/Error/Error';


import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Students from './Components/Students/Students';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutUs">
            <About></About>
          </Route>

          <Route path="/students">
            <Students></Students>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
