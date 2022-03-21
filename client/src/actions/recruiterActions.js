import { GET_JOBS, GET_JOB, JOBS_LOADING } from "./types";
import axios from "axios";
import cors from "cors";

export const getJobs = (page) => (dispatch) => {
  dispatch(setJobLoading());
  axios
    .get(
      'https://jobs-api.squareboat.info/api/v1/recruiters/jobs',
      {
        params: {
          page,
        },
      },
      { mode: cors },
    )
    .then((res) =>
      dispatch({
        type: GET_JOBS,
        payload: res.data.data
      }),
    )
    .catch((err) =>
      dispatch({
        type: GET_JOBS,
        payload: null,
      }),
    )
};

//login user
export const getJob = (job_id, callback) => (dispatch) => {
  dispatch(setJobLoading());
  axios
    .get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${job_id}/candidates`, { mode: cors })
    .then((res) =>
      {dispatch({
        type: GET_JOB,
        payload: res.data.data,
      })
      if(callback) callback(res.data.data)
    }
    )
    .catch((err) =>
      dispatch({
        type: GET_JOB,
        payload: null,
      })
    );
};

export const setJobLoading = () => {
    return {
      type: JOBS_LOADING,
    };
  };
