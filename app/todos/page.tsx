'use client'

import { useEffect, useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

interface Todo {
  id: number
  title: string
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    setTodos([{ id: 1, title: 'Sample Task' }])
  }, [])

  const handleAdd = () => {
    const newItem = { id: Date.now(), title: newTodo }
    setTodos([...todos, newItem])
    setNewTodo('')
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (id: number, title: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo))
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My TODOs</h2>
      <div className="flex gap-2 mb-4">
        <Input value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Add a new task..." />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      {todos.map(todo => (
        <Card key={todo.id} className="p-4 flex justify-between items-center mb-2">
          <input className="flex-1 bg-transparent border-none focus:outline-none" value={todo.title} onChange={(e) => handleEdit(todo.id, e.target.value)} />
          <Button variant="destructive" onClick={() => handleDelete(todo.id)}>Delete</Button>
        </Card>
      ))}
    </div>
  )
}