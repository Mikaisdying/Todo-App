import React from 'react'
import { cn } from '../../../lib/utils'

// Minimal presentational Dialog (no portal/focus-trap) for demo use
export const Dialog = ({ title, children, className, ...props }) => {
  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center p-4', className)} {...props}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-lg w-full bg-white rounded-md p-6 shadow-lg z-10">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Dialog
