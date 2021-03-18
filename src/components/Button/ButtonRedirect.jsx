import React from 'react'
import PropTypes from 'prop-types'
import StyleBtn from './button.module.sass'

function ButtonRedirect() {
  return (
    <button className={StyleBtn.buttonRedirect}>
      <span>FanPages</span>
      <span>
        <svg width="24" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillRule="evenodd" clipRule="evenodd" d="M0.998627 14.0013C0.998627 13.6035 1.15666 13.2219 1.43797 12.9406C1.71927 12.6593 2.1008 12.5013 2.49863 12.5013H37.8776L28.4366 3.06328C28.155 2.78162 27.9967 2.39961 27.9967 2.00128C27.9967 1.60295 28.155 1.22094 28.4366 0.939282C28.7183 0.657622 29.1003 0.499388 29.4986 0.499388C29.897 0.499388 30.279 0.657622 30.5606 0.939282L42.5606 12.9393C42.7003 13.0786 42.8111 13.2441 42.8868 13.4264C42.9624 13.6086 43.0013 13.804 43.0013 14.0013C43.0013 14.1986 42.9624 14.3939 42.8868 14.5762C42.8111 14.7584 42.7003 14.9239 42.5606 15.0633L30.5606 27.0633C30.279 27.3449 29.897 27.5032 29.4986 27.5032C29.1003 27.5032 28.7183 27.3449 28.4366 27.0633C28.155 26.7816 27.9967 26.3996 27.9967 26.0013C27.9967 25.603 28.155 25.2209 28.4366 24.9393L37.8776 15.5013H2.49863C2.1008 15.5013 1.71927 15.3432 1.43797 15.0619C1.15666 14.7806 0.998627 14.3991 0.998627 14.0013V14.0013Z" />
        </svg>
      </span>

    </button>
  )
}

ButtonRedirect.propTypes = {

}

export default ButtonRedirect

