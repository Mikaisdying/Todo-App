import React from 'react'
import { motion } from 'framer-motion'

export const AddButton = ({ children = 'ADD', className = '', ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={
        'inline-flex items-center justify-center px-4 text-sm font-semibold uppercase tracking-wide text-white'
        + ' bg-gradient-to-r from-rose-500 to-rose-400 shadow-lg ring-1 ring-white/20 border border-white/10 ' + className
      }
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AddButton
