import React, { Component } from "react";
import PropTypes from "prop-types";
import JobItem from "./JobItem";
import { ApplicantCard } from "../layout/ApplicantCard";

const JobData = ({ job }) => {   
    return (
      <div className='container-fluid'>
        <p className='lead row'>Total {job.length} applicants</p>
        <div className='row'>
            {job.map((applicant) => (
              <ApplicantCard
                name={applicant.name}
                email={applicant.email}
                skillsList={applicant.skills}
                cardClass='mrgn-10'
                key={applicant.id}
              />
            ))}
        </div>
      </div>
    )
}
JobData.propTypes = {
  job: PropTypes.array.isRequired,
};

export default JobData;
