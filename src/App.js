import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import Login from './components/Login.js';

function App() {
  return (

    <Router>

      <Switch>

        <Route exact path="/">
            <Landing/>
        </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

      </Switch>

    </Router>

  );
}

export default App;
