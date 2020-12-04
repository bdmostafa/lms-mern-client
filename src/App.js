import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [librarian, setLibrarian] = useState(false);
  const [order, setOrder] = useState({});
  const [student, setStudent] = useState(true);

  return (
    <UserContext.Provider value={{
      loggedInUser,
      setLoggedInUser,
      order,
      setOrder,
      librarian,
      setLibrarian,
      student,
      setStudent
    }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
