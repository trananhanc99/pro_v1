import React from 'react'
import PropTypes from 'prop-types';
import cl from "classnames";
import BannerMain from "@/components/Banner/BannerMain";
import StyleHomePage from "./StyleHomePage.module.sass";
import StyleText from "@/components/Text/Text.module.sass";
import ProductDescribe from '@/components/Product/productDescribe'
import ProductNormal from '@/components/Product/productNormal'

function Home() {
  return (
    <>
      <section className={cl(StyleHomePage.areaBanner)}>
        <div className={cl(StyleHomePage.areaBannerOne, "grid justify-center")}>
          <BannerMain />
          <BannerMain />
        </div>
        <div className={cl(StyleHomePage.areaBannerTwo, "grid justify-center")}>
          <BannerMain />
          <BannerMain />
          <BannerMain />
        </div>
      </section>
      {/* Product  */}
      <section className={cl(StyleHomePage.areaNewProduct)}>
        <h2 className={cl(StyleText.titleNewProduct)}>Are realy realy like you.</h2>
        <section className={cl(StyleHomePage.sectionNewProductOne, "grid justify-center")}>
          <ProductDescribe />
          <ProductNormal />
          <ProductNormal />
        </section>
        <section className={cl(StyleHomePage.sectionNewProductTwo, "grid justify-center")}>
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

