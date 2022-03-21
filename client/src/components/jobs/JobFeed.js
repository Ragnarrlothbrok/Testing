import React, { Component } from "react";
import PropTypes from "prop-types";
import JobItem from "./JobItem";
import {Pagination} from 'antd'

import './index.css'

class JobFeed extends Component {
  render() {
    const { jobs, onPaginationChange, onJobClick } = this.props
    return (
      <div>
        <div className='container-fluid row'>
          {jobs.data.map((job) => (
            <JobItem key={job.id} job={job} onClickCard={onJobClick} />
          ))}
        </div>
        <div className='flex flex-center mt-3'>
          <Pagination
            defaultCurrent={1}
            total={50}
            onChange={onPaginationChange}
          />
        </div>
      </div>
    )
  }
}
JobFeed.propTypes = {
  jobs: PropTypes.array.isRequired,
  onPaginationChange: PropTypes.func.isRequired,
  onJobClick: PropTypes.func.isRequired
}

export default JobFeed;
