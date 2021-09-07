import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import SignUp from './SignUp';
import Profile from './Profile';
import Header from './Header';
import CreatePost from './CreatePost';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signup"> 
            <SignUp />
        </Route>
        <Route path="/profile">
            <Header />
            <Profile />
        </Route>
        <Route path="/createpost">
            <Header />
            <CreatePost />
        </Route>

        {/* Gotta keep this one on the bottom */}
        <Route path="/">
            <Header />
            <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
