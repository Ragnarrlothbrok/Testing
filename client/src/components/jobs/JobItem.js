import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import './index.css'

class JobItem extends Component {
  onApplyClick(id) {
    // this.props.addLike(id);
    //Do nothing as described in task
  }

  render() {
    const { job, onClickCard } = this.props;
    return (
      <div className="card card-body col-md-4 m-1"
        onClick={() => onClickCard(job.id)}
      >
        <div className="container-fluid">
          <div className="row">
            <p className="text-left">{job.title}</p>
          </div>
          <div className='row'>
            <p className='lead'>{job.description}</p>
          </div>
          <div className='row mt-4'>
            <div className='col-md-8'>
              <Button type='text' className='btn btn-sm btn-light'>
                <i
                  className='fa-solid fa-location-dot mr-2'
                  style={{ color: '#43AFFF' }}
                >
                </i>
                {job.location}
              </Button>
            </div>
            <div className='col-md-2'>
              <button
                onClick={this.onApplyClick.bind(this, job.id)}
                type='button'
                className='btn btn-primary'>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

JobItem.propTypes = {
  jobs: PropTypes.object.isRequired,
  //   auth: PropTypes.object.isRequired,
  onClickCard: PropTypes.func
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default JobItem;
