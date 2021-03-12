import React from 'react'
import PropTypes from 'prop-types'
import StyleCircle from './styleCircle.module.sass'
import cl from 'classnames';


function Circle() {
  return (
    <>
      <div className={cl(StyleCircle.contentCircle)}>
        <div className={cl(StyleCircle.circleOne, "rounded-full")}></div>
        <div className={cl(StyleCircle.circleTwo, "rounded-full")}></div>
        <div className={cl(StyleCircle.circleThree, "rounded-full")}></div>
        <div className={cl(StyleCircle.circleFour, "rounded-full")}></div>
      </div>
    </>
  )
}

Circle.propTypes = {

}

export default Circle

