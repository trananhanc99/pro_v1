import ProductNormal from "@/components/Menu";
import mainLayout from "styles/layout/_layout.module.sass";
import StyleHome from "styles/home/home.module.sass";
import cl from "classnames";
import MenuLeft from "@/components/Menu";
import Circle from "@/components/Circle";
import HomePage from "@/src/layout/home";
import Search from "@/components/Search";
import BtnRedirect from "@/components/Button/ButtonRedirect";
export default function Home() {
  return (
    <>
      <div className={cl(mainLayout.mainLayout)}>
        {/* headerTop */}
        <div className={cl(mainLayout.menuTop)}>
          <div className="flex h-full items-center">
            <div className={cl(StyleHome.brandToys)}></div>
            <div className={cl(StyleHome.menuTopLeft)}>
              <div className={cl(StyleHome.sectionSearch)}>
                <Search width={"27.9375rem"} />
              </div>
              <BtnRedirect />
            </div>
          </div>
        </div>
        {/* navBarLeft */}
        <div className={cl(mainLayout.mainContent)}>
          <div className={cl(mainLayout.navbarLeft)}>
            <div className={cl(mainLayout.areaMenuLeft)}>
              <MenuLeft />
              <MenuLeft />
              <MenuLeft />
              <MenuLeft />
              <MenuLeft />
              <MenuLeft />
              <MenuLeft />
            </div>
          </div>
          {/* main content */}
          <div className={cl(mainLayout.contentPage)}>
            {/* <Circle /> */}
            <HomePage />
          </div>
        </div>
      </div>
    </>
  );
}
