import React from "react";
import { connect } from "react-redux";
import { getUser } from "../Store/users";

function Home(props) {
  props.getMyUser("41e0ef686ae646528759e6b4238bf994");

  return (
    <div className="container-fluid">
      <h2>This would be the homepage</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyUser: (id) => dispatch(getUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
