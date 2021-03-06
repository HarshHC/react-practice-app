import React from 'react';
import './App.css';
import './tailwind.css'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/footer';
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>

        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/react-practice-app/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/products/:id">
              <Product/>
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    
    </div>
  );
}

export default App;
