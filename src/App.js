import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Component/Main';
import Nav from './Component/Nav';
import StarwarsList from './Component/StarwarsList';
import Header from './Header/Header'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div>
        <header className="app-header">
        <Header />
        </header>
      <nav className="app-nav">
        <Nav />
      </nav>
      <main className="app-main">
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/starwars" component={StarwarsList} />
        </Switch>
      </main>
      </div>
  
    );
  }
}

export default App;