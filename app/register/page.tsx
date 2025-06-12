'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = async () => {
    if (email && password) {
      // simulate storing user credentials
      localStorage.setItem('user', JSON.stringify({ email, password }))
      router.push('/login') // redirect to login page
    } else {
      alert('Email and password are required')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2" />
      <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4" />
      <Button onClick={handleRegister} className="w-full">Register</Button>
    </div>
  )
}
