import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

export const Button = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none'
  const variants = {
    default: 'bg-sky-600 text-white hover:bg-sky-700 shadow-sm',
    ghost: 'bg-transparent hover:bg-gray-100'
  }

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button
