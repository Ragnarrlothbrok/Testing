import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Card } from './Card'
import { Col, Row } from 'antd'

const data1 = [
  {
    img: require('../../img/solaytic@2x.png'),
    alt: 'solaytic@2x.png',
  },
  {
    img: require('../../img/kanba@2x.png'),
    alt: 'kanba@2x.png',
  },
  {
    img: require('../../img/lighting@2x.png'),
    alt: 'lighting@2x.png',
  },
  {
    img: require('../../img/ztos@2x.png'),
    alt: 'ztos@2x.png',
  },
  {
    img: require('../../img/kanba@2x.png'),
    alt: 'kanba@2x.png',
  }
]

const data2 = [
  {
    img: require('../../img/goldline@2x.png'),
    alt: 'goldline@2x.png',
  },
  {
    img: require('../../img/ideaa@2x.png'),
    alt: 'ideaa@2x.png',
  },
  {
    img: require('../../img/liva@2x.png'),
    alt: 'liva@2x.png',
  },
  {
    img: require('../../img/velocity-9@2x.png'),
    alt: 'velocity-9@2x.png',
  },
]

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div className='landing'>
        <div className=''>
          <div className=''>
            <Row className='row top-div' style={{ padding: '5% 10% 40px' }}>
              <Col className='left'>
                <div>
                  Welcome to
                  <br />
                  My<span>Jobs</span>
                </div>
                <button className='getStarted'>Get Started</button>
              </Col>
              <Col>
                <img
                  src={require('../../img/img1.png')}
                  alt='1'
                  className='img1'
                />
              </Col>
            </Row>
            <div style={{ margin: '20px 10%' }} className="mrgn-t-80">
              <div className='mrgn-b-20 font-22 container mt-5'>Why Us?</div>
              <div className='flex mrgn-t-20 container'>
                <Card
                  cardClass='mrgn-r-15'
                  title='Get More Visibility'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                />
                <Card
                  cardClass='mrgn-r-15 mrgn-l-15'
                  title='Organize Your Candidates'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card
                  cardClass=' mrgn-l-15'
                  title='Verify Their Abilities'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                />
              </div>

              <div className='mrgn-t-80 font-22 mb-5'>Companies Who Trust Us</div>
              <div className='mrgn-t-20 flex flex-jsb'>
                {data1.map((item) => (
                  <div className='col-md-2 companies'>
                    <img src={item.img} alt={item.alt} />
                  </div>
                ))}
              </div>
              <div className='mrgn-t-20 flex flex-jsb mr-5 ml-5 mrgn-b-20'>
                {data2.map((item) => (
                  <div className='col-md-2 companies'>
                    <img src={item.img} alt={item.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Landing)
