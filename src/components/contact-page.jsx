'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BackgroundBeams } from './ui/background-beams'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <>
      <div
        className="relative z-30 min-h-screen text-white flex flex-col items-center justify-center p-4">
        <main className="w-full max-w-md">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">CONTACT</h1>
          <p className="text-gray-400 text-center mb-8">
            We're here to help with any questions about our courses, programs, or events.
            Reach out and let us know how we can assist you in your journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-800 border-gray-700" />
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 border-gray-700" />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-gray-800 border-gray-700"
              rows={5} />
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
              Send Message
            </Button>
          </form>
        </main>
      </div>
      <BackgroundBeams />
    </>
  );
}