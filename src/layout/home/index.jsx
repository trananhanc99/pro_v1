import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import cl from "classnames";
import BannerMain from "@/components/Banner/BannerMain";
import StyleHomePage from "./StyleHomePage.module.sass";
import StyleText from "@/components/Text/Text.module.sass";
import ProductDescribe from '@/components/Product/productDescribe'
import ProductNormal from '@/components/Product/productNormal'
import SingleCircle from '@/components/Circle/singleCircle'

function Home() {

  const bannerOne = useCallback(
    () => {
      return <div className="relative">
        <BannerMain />
        <SingleCircle width="50px" height="50px" bg="red" />
      </div>
    },
    [],
  )
  return (
    <>
      <section className={cl(StyleHomePage.areaBanner)}>
        <div className={cl(StyleHomePage.areaBannerOne, "grid justify-center")}>
          <div className={cl(StyleHomePage.gridC)}><BannerMain label="ádasdasd"><h1>hhhhh</h1> </BannerMain>

          </div>
          <BannerMain />
          <BannerMain />
          <BannerMain />
          <BannerMain />
        </div>
      </section>
      {/* Product  */}
      <section className={cl(StyleHomePage.areaNewProduct)}>
        <h2 className={cl(StyleText.titleNewProduct)}>Are realy realy like you.</h2>
        <section className={cl(StyleHomePage.sectionNewProductOne, "grid justify-center")}>
          <div className={cl(StyleHomePage.gridC)}><ProductDescribe /></div>
          <ProductNormal />
          <ProductNormal />
          <ProductNormal />
          <ProductNormal />
          <ProductNormal />
          <ProductNormal />
        </section>
      </section>
    </>
  )
}

Home.propTypes = {

}

export default Home

