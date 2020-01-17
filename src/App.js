import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import {AuthProvider} from "./Context";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
      <AuthProvider>
        <div className="App">
          <header className="App-header">

            <Router>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Protected path="/dashboard">
                  <Dashboard />
                </Protected>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>

          </header>
        </div>
      </AuthProvider>

  );
}

export default App;
