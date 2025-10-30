import React from 'react'
import { Button } from '../views/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 }
}

export default function TodoListView({ todos, onToggle, onDelete }) {
  return (
    <ul className="flex flex-col gap-3 mt-4">
      <AnimatePresence>
        {todos.map((t) => (
          <motion.li
            key={t.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={item}
            className="flex items-center justify-between gap-3 p-3 rounded-full hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => onToggle(t.id)}
                aria-label={t.completed ? 'Mark undone' : 'Mark done'}
                className="flex-none"
              >
                {t.completed ? (
                  <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs">✓</div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                )}
              </button>

              <span className={t.completed ? 'line-through text-slate-400 text-sm' : 'text-sm'}>{t.text}</span>
            </div>

            <div className="flex-none">
              <Button
                variant="ghost"
                onClick={() => onDelete(t.id)}
                className="text-slate-300 hover:bg-transparent hover:text-rose-400 focus:bg-transparent focus:text-rose-500 px-3 py-1 font-semibold text-base"
                aria-label="Delete todo"
              >
                ✕
              </Button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
