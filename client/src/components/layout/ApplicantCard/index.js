import React from 'react'
import { PropTypes } from 'prop-types'
import { Avatar, Col, Row } from 'antd'

import './index.css'

export const ApplicantCard = ({ name, email, skillsList, cardClass }) => {
  return (
    <div className={`card card-body col-md-6 my-1 ${cardClass}`}>
      <Row className='flex ' gutter={16}>
        <Col>
          <Avatar
            style={{ verticalAlign: 'middle', height: '50px', width: '50px' }}
            className='avatar'
            size={64}>
            {name.charAt(0)}
          </Avatar>
        </Col>
        <Col>
          <div className='name'>{name}</div>
          <div className='email cut-text'>{email}</div>
        </Col>
      </Row>
      <div gutter={16} className='skillsList'>
        <span>Skills</span> <br /> {skillsList}
      </div>
    </div>
  )
}

ApplicantCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  skillsList: PropTypes.array,
  cardClass: PropTypes.string,
}
