import React from "react";
import { connect } from "react-redux";
import { getUser } from "../Store/users";

function Home(props) {
  // props.getMyUser("41e0ef686ae646528759e6b4238bf994");

  return (
    <div className="Home container-fluid text-center d-flex flex-fill mb-5">
      <div className="container">
        <img
          className="img-fluid"
          alt="America's Navy Logo"
          src="https://www.navy.mil/Portals/_default/Skins/NavyTheme2/Resources/img/WhiteRegisteredTradeMake.png"
        ></img>
        <h2 className="visually-hidden sr-only">Welcome Home!</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyUser: (id) => dispatch(getUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
