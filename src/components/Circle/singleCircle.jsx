import React from 'react'
import PropTypes from 'prop-types';

function SingleCircle({ width, height, bg }) {
  const styleCircle = {
    width,
    height,
    backgroundColor: bg
  };
  return (
    <div className={`rounded-full absolute`} style={{ ...styleCircle }}>

    </div>
  )
}

SingleCircle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg: PropTypes.string,
}

export default SingleCircle;

