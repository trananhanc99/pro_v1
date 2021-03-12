import React from 'react'
import { motion } from "framer-motion";
import SubMenu from './SubMenu'
import PropTypes from 'prop-types'


const itemIds = [0, 1, 2, 3, 4];


function ListItem({ listMenu = itemIds }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <>
      <motion.ul variants={variants}>
        {listMenu.map((el, i) => <SubMenu key={i} />)}
      </motion.ul>
    </>
  )
}

ListItem.propTypes = {
  listMenu: PropTypes.array

}

export default ListItem

