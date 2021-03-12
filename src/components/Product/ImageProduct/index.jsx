import React from 'react'
import StyleImageProduct from './ImageProduct.module.sass'
import cl from 'classnames'
import PropTypes from 'prop-types'


function ImageProduct(props) {
  return (
    <>
      <div className={cl(StyleImageProduct.imagesProductToy)}>
        <img src="https://images.unsplash.com/photo-1590692928242-111d76377422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
      </div>
    </>
  )
}

ImageProduct.propTypes = {

}

export default ImageProduct

