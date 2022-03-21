import React from "react";
import { PropTypes } from "prop-types";

import './index.css' 

export const Card = ({
  title,
  description,
  cardClass
}) => {
  return (
    <div className={`card ${cardClass}`}>
      <div className="title">{title}</div>
      <div className="des">{description}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardClass: PropTypes.string
}
