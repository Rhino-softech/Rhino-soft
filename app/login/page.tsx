"use client"

import type React from "react"
import { useState } from "react"
import InputField from "../../components/ui/InputField"
import GlowingLinesBackground from "../../components/glowing-lines-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login submitted", { email, password })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden">
      <GlowingLinesBackground />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-black/70 p-8 shadow-lg backdrop-blur-sm">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold text-white">Sign in to your account</h1>
          <p className="text-sm text-gray-300">Enter your details below to sign in</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <InputField
            id="email"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-500"
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-500"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link href="/register" className="underline text-blue-400 hover:text-blue-300">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
