import React from "react";
import Map from "./components/Map";
import Login from "./components/Login";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from "./auth/Auth";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;