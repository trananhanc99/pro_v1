import React from 'react'
import PropTypes from 'prop-types'
import StylePrice from './Price.module.sass';
import cl from 'classnames'
import Cart from './cart.svg'

function PriceProduct() {
  return (
    <div className={cl(StylePrice.priceProductToy, 'flex justify-between items-center')}>
      <div>
        <span className="font-bold text-3xl shadow-link">20</span>
      </div>
      <div className={cl(StylePrice.cartProductToy, "flex justify-center items-center rounded-full")}>
        <img src={Cart} alt="cart" />
      </div>
    </div>
  )
}

PriceProduct.propTypes = {

}

export default PriceProduct

