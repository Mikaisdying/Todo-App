import React from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="container">
        <div className="app-card w-full">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4"
          >
            <h1 className="title"><span>🗒️</span> <span className='tdl'>TO-DO LIST</span> </h1>
          </motion.div>

          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
