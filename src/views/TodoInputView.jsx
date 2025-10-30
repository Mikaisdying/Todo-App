import React from 'react'
import Input from '../views/ui/input'
import AddButton from '../views/ui/addButton'
import Card from '../views/ui/card'

export default function TodoInputView({ value, onChange, onAdd }) {
  return (
    <div className="mb-4">
      <Card className="p-3">
        <div className="flex items-center rounded-full overflow-hidden bg-slate-100">
          <Input
            value={value}
            onChange={onChange}
            placeholder="Add your task"
            className="flex-1 h-12 pl-6 pr-4 bg-transparent placeholder:text-slate-400 border-0 shadow-none rounded-none text-sm"
          />

          <AddButton onClick={onAdd} className="h-12 px-6 rounded-r-full" />
        </div>
      </Card>
    </div>
  )
}
