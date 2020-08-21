import React from "react";
import { Route, Switch} from 'react-router-dom';
import "./styles.css";
import Current from './current';
import Fiveday from './fiveday';
import Hourly from './hourly'
import Monthly from './monthly';
import Toolbar from './Toolbar/toolbar';
// const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

export default function App() {
 
  return <div>
    <Toolbar />
    <Switch>
     <Route path='/fiveday' render={() => <Fiveday /> } />
     <Route path='/monthly' render={() => <Monthly /> } />
     <Route exact path="/hourly" render={() => <Hourly /> } />
     <Route exact path="/" render={() => <Current /> } />
    </Switch>
    
  </div>
}