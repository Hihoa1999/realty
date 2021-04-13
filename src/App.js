import './App.css';
import Nav from "./components/NavBar/Index";
import Foot from "./components/Footer/Index";
import router from "./routers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react';
var routers = router.map((value, index) => {
  return (
    <Route
      key={index}
      path={value.path}
      component={value.main}
      exact={value.exact}
    ></Route>
  );
});
class App extends Component {
  render(){
  return (
    <Router>
        <Nav />
        <Switch>
          {routers}
        </Switch>
        <Foot />
     </Router>
  );
  }
}

export default App;
