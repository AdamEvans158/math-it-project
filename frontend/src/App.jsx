import { Router, Route } from "@solidjs/router";
import Landing from './components/Landing';
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";

function App() {

  return (

    <Router>

      <Route path="/" component={<Landing/>}></Route>

      <Route path="/signup" component={<SignUp/>}></Route>

        <Route path="/users/:id" component={<UserHome/>}></Route>

    </Router>

  )

}

export default App;
