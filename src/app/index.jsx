import React, {useState, useEffect} from "react";
import { Route, Switch} from 'react-router-dom';
import "./styles.css";
// import Item from "./item";
// import CitySearch from "./citysearch";
import Fiveday from './fiveday';
import Monthly from './monthly';
import Toolbar from './Toolbar/toolbar';
// const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'


export default function App() {
 
  return <div>
    <Toolbar />
    <Switch>
     <Route path='/weather' render={() => <Fiveday /> } />
     <Route path='/monthly' render={() => <Monthly /> } />
     <Route exact path="/" render={() => <div> Home Page </div>} />
    </Switch>
    
  </div>
}