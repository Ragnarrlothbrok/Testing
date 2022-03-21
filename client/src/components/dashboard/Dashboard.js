import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    let dashboardContent;
    dashboardContent = (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
      </div>
    );

    return (
      <div className="dashboard">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
