"use client"

import type React from "react"
import { useState } from "react"
import InputField from "../../components/ui/InputField"
import GlowingLinesBackground from "../../components/glowing-lines-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted", { name, email, password, confirmPassword })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden">
      <GlowingLinesBackground />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-black/70 p-8 shadow-lg backdrop-blur-sm">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold text-white">Create a new account</h1>
          <p className="text-sm text-gray-300">Enter your details below to create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <InputField
            id="name"
            label="Full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-500"
          />
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
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-500"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Register
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-400 hover:text-blue-300">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
