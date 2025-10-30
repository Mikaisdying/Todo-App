import React from 'react'
import { cn } from '../../../lib/utils'

export const Card = ({ className, children, ...props }) => {
  return (
    <div className={cn('rounded-lg bg-white p-4 shadow-sm', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
