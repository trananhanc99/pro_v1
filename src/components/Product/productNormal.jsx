import React from 'react'
import StyleProductNormal from './Product.module.sass'
import PropTypes from 'prop-types'
import cl from 'classnames'


// Component 
import ImageProduct from './ImageProduct'
import PriceProduct from './PriceProduct'

function ProductNormal(props) {
  return (
    <>
      <div className={cl(StyleProductNormal.productToy, 'relative shadow-lg rounded-md')}>
        {/* img product */}
        <ImageProduct />
        {/* name product */}
        <div className={cl(StyleProductNormal.nameProductToy)}>
          <span className="break-words font-bold overflow-ellipsis overflow-hidden">áda</span>
        </div>
        {/* price product */}
        <PriceProduct />
      </div>
    </>
  )
}

ProductNormal.propTypes = {

}

export default ProductNormal

