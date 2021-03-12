import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import StyleBannerMain from './bannerMain.module.sass'

function BannerMain() {
  return (
    <>
      <div className={cl(StyleBannerMain.bannerMain, 'shadow-2xl')} >

      </div>
    </>
  )
}

BannerMain.propTypes = {

}

export default BannerMain

