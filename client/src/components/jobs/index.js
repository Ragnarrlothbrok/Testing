import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import { getJobs, getJob } from "../../actions/recruiterActions";
import JobFeed from "./JobFeed";
import JobData from "./jobData";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";

const initialModalData = {
  showJob: false
};

const Jobs = ({ jobs, actions }) => {
  const [modalData, setModalData] = useState(initialModalData);
  const { getJobs, getJob, loading } = actions;

  useEffect(() => {
    getJobs();
  }, []);
  const onPaginationChange = (page) => {
    getJobs(page)
  }
  const onJobClick = (id) => {
    getJob(id, (job) => {
      console.log("Flow came here", job);
      setModalData({
        showJob: true,
      });
    });
  };

  const closeModal = () => {
    setModalData(initialModalData)
  }

  let jobContent;
  if (jobs.jobs.length === 0 || loading) {
    jobContent = <Spinner />;
    } else {
    jobContent = (
      <JobFeed jobs={jobs.jobs} onPaginationChange={onPaginationChange} onJobClick={onJobClick} />
    ) // check this
    }

  return (
    <div className="jf">
      <ToastContainer />
      <div className="feed">
        <div className="container">
        
        <div className="">
          <Link className="nav-link lead mb-3 font-white" to="/jobFeed">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <h2 className="font-white">Jobs posted by you.</h2>
        </div>
          <div className="row">
            <div className="col-md-12">{jobContent}</div>
          </div>
        </div>
      </div>
      <Modal show={modalData.showJob} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Applicants for this job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData.showJob && jobs.job && <JobData job={jobs.job} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.object.isRequired,
  actions: PropTypes.func,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getJobs,
      getJob,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
