"use client"
import { Suspense, useState } from "react"
import EmailTemplate from "../_email"
import Link from "next/link"

export default function Client() {
  const [visible, setVisible] = useState(false)

  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Client</h1>
      <button
        className="bg-slate-100 text-slate-800 p-4 rounded hover:scale-105"
        onClick={() => setVisible((v) => !v)}
      >
        show/hide template
      </button>
      {visible && (
        <Suspense fallback="loading...">
          <EmailTemplate
            name="Template rendered on client"
            email="test@test.test"
            btn="click me"
          />
        </Suspense>
      )}
    </main>
  )
}
