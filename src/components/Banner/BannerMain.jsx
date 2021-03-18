import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import Circle from '@/components/Circle/singleCircle'
import StyleBannerMain from './bannerMain.module.sass';
import { isUndefined } from '@/src/functions'

function BannerMain({ label, ...rest }, props) {
  return (
    <>
      <div className={cl(StyleBannerMain.bannerMain, 'shadow-2xl bg-center bg-no-repeat bg-cover')} style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1610483232624-6a6ff63ad861?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1969&q=80)`
      }} >
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </div>
    </>
  )
}

BannerMain.propTypes = {
  label: PropTypes.string,
  node: PropTypes.node
}

export default BannerMain

