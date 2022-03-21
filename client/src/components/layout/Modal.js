import React from "react"
import PropTypes from "prop-types"

const Modal = ({ 
  title, 
  count, 
  cardData 
}) => {
  return (
    <div className="">
      {
        title &&
        <p className="ori-font-md">{title}</p>
      }
      <br/>
      {
        count &&
        <p className="ori-font-md">{count}</p>
      }
      {/* {
        cardData &&
        // <p>{description}</p>
        <div>
            cardData.map( card => <Card></Card>)
        </div>
        
      } */}
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  cardData: PropTypes.array,
}

export default Modal
