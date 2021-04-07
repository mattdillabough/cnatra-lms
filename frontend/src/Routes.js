import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Grades from "./Components/Grading/Grades";
import PhaseNav from "./Components/Grading/PhaseNav";
import Gradesheet from "./Components/Grading/Gradesheet";
import Settings from "./Components/Settings";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/Grades/:phaseName/:gradesheetId"
        component={Gradesheet}
      />
      <Route exact path="/Grades/:phaseName" component={PhaseNav} />
      <Route path="/Academics" component={Academics} />
      <Route path="/Grades" component={Grades} />
      <Route path="/Settings" component={Settings} />
      <Route path="/Login" component={Login} />
      <Route path="/Logout" component={Logout} />
    </Switch>
  );
}

/*Todo:
- May alter url paths for grades once navigation from a phase to a gradesheet is more established
- If the user is not logged in yet, they should be redirected to the Login page
*/

export default withRouter(Routes);
