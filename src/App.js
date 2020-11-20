import React from 'react';
import './App.css';
import One from './components/one';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NoMatch from './components/nomatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>






    // <div>
    //   <One name={"One"}/>
    // </div>
  );
}

export default App;
