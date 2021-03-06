import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from "./components/Navbar"
import Pricing from "./Pricing"
import Registeration from "./Registeration"
import Select from "./Select"
import Select1 from "./Select1"
import Select2 from "./Select2"
import Select3 from "./Select3"
import Select4 from "./Select4"
import Select5 from "./Select5"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Addcourses from "./Addcourses";
import Basicdetails from "./Basicdetails"
import Usermanagement from "./Usermanagement"
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/registeration" component={Registeration} />
        <Route exact path="/select" component={Select} />
        <Route exact path="/select1" component={Select1} />
        <Route exact path="/select2" component={Select2} />
        <Route exact path="/select3" component={Select3} />
        <Route exact path="/select4" component={Select4} />
        <Route exact path="/select5" component={Select5} />
        <Route exact path="/step4" component={Step4} />
        <Route exact path="/step5" component={Step5} />
        <Route exact path="/addcourses" component={Addcourses} />
        <Route exact path="/basicdetails" component={Basicdetails} />
        <Route exact path="/usermanagement" component={Usermanagement} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
