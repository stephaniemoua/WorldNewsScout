//import logo from './logo.png';
//import './App.css';
import React from 'react';

// import TrendingW from './components/TrendingW'
// import TrendingC from './components/TrendingC'
// import Bottom from './components/Bottom'
import Banner from './components/Banner'
import Header from './components/Header'
import Home from './pages/homepage/Home'
import Footer from './components/Footer'
import SearchPage from './pages/searchpage/SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//const App = () => { return (   )}
function App() {

  return (
    <div className="app">
      < Router>

          <Banner />   
          <Header /> 

          <Switch>
            <Route path="/search">
              <SearchPage category='Search' level='' topic='Covid-19'/>
            </Route>
            <Route path="/trending+worlwide">
              <SearchPage category='Trending' level='worldwide' topic='hello'/>
            </Route>
            <Route path="/trending+country">
              <SearchPage category='Trending' level='US' topic='hello'/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
          <Footer /> 

       </Router>
          
    </div>
  );
}

export default App;
