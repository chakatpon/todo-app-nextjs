'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    // TODO: Replace with real Hasura auth
    if (email && password) {
      // simulate login success (you'd normally store a token here)
      localStorage.setItem('user', JSON.stringify({ email }))
      router.push('/todos') // 👈 redirect to todos page
    } else {
      alert('Email and password are required')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2" />
      <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4" />
      <Button onClick={handleLogin} className="w-full">Login</Button>
    </div>
  )
}
