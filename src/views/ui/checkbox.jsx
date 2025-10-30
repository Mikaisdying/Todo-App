import React from 'react'
import { cn } from '../../../lib/utils'

export const Checkbox = ({ checked, onChange, className, ...props }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={cn('h-4 w-4 rounded border-slate-300 text-sky-600', className)}
      {...props}
    />
  )
}

export default Checkbox
