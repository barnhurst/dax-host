import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navigation from './Navigation';
import HostForm from './HostForm';
import Hosts from './Hosts';
import Host from './Host';

const App = () =>{
  return (
    <Router>
      <Navigation />
      <div className="App">
      <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/hosts" component={Hosts} />
            <Route exact path="/hosts/new" component={HostForm} />
            <Route path='/hosts/:id' component={Host} />


      </Switch>
      </div>
    </Router>
  )
}

export default App;