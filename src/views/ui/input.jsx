import React from 'react'
import { cn } from '../../../lib/utils'

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
        className={cn(
        'w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-white',
        className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'
export default Input
