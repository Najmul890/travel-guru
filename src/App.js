import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';



function App() {
  return (
    <AuthContextProvider>
      <Router>
      
        <Switch>
          <Route exact path="/">
          
            <Home>
            
            </Home>
          </Route>
          <Route path="/booking/:resortKey" >
            <Header></Header>
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/details/:resortKey" >
            <Header></Header>
            <DestinationDetails></DestinationDetails>
          </PrivateRoute>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </AuthContextProvider>
  );
}

export default App;
