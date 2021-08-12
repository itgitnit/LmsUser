import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Addcourses from "./Addcourses";
import Basicdetails from "./Basicdetails"
import Usermanagement from "./Usermanagement"
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Addcourses} />
        <Route exact path="/basicdetails" component={Basicdetails} />
        <Route exact path="/usermanagement" component={Usermanagement} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
