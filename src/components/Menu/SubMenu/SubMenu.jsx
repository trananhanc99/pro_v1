import React from 'react'
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

function SubMenu() {


  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <p>asdasdasd</p>
      </motion.li>
    </>
  )
}

SubMenu.propTypes = {

}

export default SubMenu

