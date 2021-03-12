import React from 'react'
import cl from 'classnames'
import StyleSearch from './Search.module.sass'
import SearchSvg from "./Search.svg";
import PropTypes from 'prop-types'
function Search(props) {
  return (
    <>
      <div className={cl(StyleSearch.areaSearch, 'flex p-2 px-2 rounded-full')} >
        <div className={cl(StyleSearch.iconSearch)}>
          <img className="w-full" src={SearchSvg} alt="SearchSvg" />
        </div>
        <div className={cl(StyleSearch.areaTextSearch, "pl-2")}>
          <input className="placeholder-gray-500" type="text" name="search-category" placeholder="Tìm kiếm..." id="" />
        </div>
      </div>
    </>
  )
}

Search.propTypes = {

}

export default Search

