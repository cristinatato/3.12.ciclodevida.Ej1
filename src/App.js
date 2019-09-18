import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Clock from './components/Clock';
import NoClock from './components/NoClock';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Ir a reloj</Link>
          <Link to="/noclock">Ir a frase</Link>
        </nav>
        <Switch>
          <Route exact path= "/" component={Clock} />
          <Route exact path= "/noclock" component={NoClock} />
        </Switch>
      </div>
    );
  }
}

export default App;
