import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login'
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Overview from './components/overview/Overview';
import CreateBug from './components/createBug/CreateBug';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/create">
            <CreateBug />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
