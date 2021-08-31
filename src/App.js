import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import SignUp from './SignUp';
import Profile from './Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/Profile">
            <Profile />
        </Route>

        {/* Gotta keep this one on the bottom */}
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
