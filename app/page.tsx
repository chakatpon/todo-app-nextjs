'use client'

import Link from 'next/link'
import { Button } from './components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">TODO App</h1>
      <div className="flex gap-4">
        <Link href="/login"><Button>Login</Button></Link>
        <Link href="/register"><Button variant="outline">Register</Button></Link>
      </div>
    </div>
  )
}