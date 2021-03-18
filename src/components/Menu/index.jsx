import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types';
import cl from 'classnames';
import StyleMenu from './menu.module.sass'


function MenuHome() {
  return (
    <div>
      <h3 className={cl(StyleMenu.itemSubMenu, "text-xl inline-flex")} style={{ boxShadow: `inset 0rem 0rem 0rem 0rem #fff, inset 0 -0.2rem 0.2rem 0 rgb(165 243 252 / 40%)` }}>Sport</h3>
    </div>
  )
}

MenuHome.propTypes = {

}

export default MenuHome;

