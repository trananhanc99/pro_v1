import React from 'react'
import StyleProductNormal from './Product.module.sass'
import PropTypes from 'prop-types'
import cl from 'classnames'


// Component 
import ImageProduct from './ImageProduct'
import PriceProduct from './PriceProduct'

function ProductDescribe(props) {
  return (
    <>
      <div className={cl(StyleProductNormal.productDescribeToy, 'relative flex shadow-lg rounded-md')}>
        {/* img product */}
        <div className={StyleProductNormal.imagesDescribeToy}>
          <ImageProduct />
        </div>
        {/* name product */}
        <div className={cl(StyleProductNormal.nameAndDescribeProductToy, 'flex flex-col relative')}>
          <span className={cl(StyleProductNormal.nameDProductToy, 'break-words font-bold overflow-ellipsis overflow-hidden')}>áda</span>
          <span className={cl(StyleProductNormal.describeProduct, "font-normal base")}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eos iure. Assumenda, aspernatur nostrum velit ab consequuntur facilis pariatur enim earum delectus, obcaecati et. Maxime illum harum aliquam veniam minima?</span>
          <div className={cl(StyleProductNormal.priceDescribeProductToy)}>
            <PriceProduct />
          </div>
        </div>
      </div>
    </>
  )
}

ProductDescribe.propTypes = {

}

export default ProductDescribe

