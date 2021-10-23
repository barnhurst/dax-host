import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navigation from './Navigation';
import HostForm from './HostForm';
import Hosts from './Hosts';
import Host from './Host';
import {MyProvider} from "./MyContext";

const children = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hosts" component={Hosts} />
            <Route exact path="/hosts/new" component={HostForm} />
            <Route path='/hosts/:id' component={Host} />
        </Switch>
    )
}

const App = () =>{
  return (
    <Router>
      <Navigation />
      <div className="App">
          <MyProvider children={children}>

          </MyProvider>
      </div>
    </Router>
  )
}

export default App;