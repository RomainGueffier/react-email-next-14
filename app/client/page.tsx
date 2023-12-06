'use client'
import { useState } from "react";
import EmailTemplate from "../_email";
import Link from "next/link";

export default function Client() {
  const [visible, setVisible] = useState(false)

  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Client</h1>
      <button className="bg-slate-100 text-slate-800 p-4 rounded hover:scale-105" onClick={() => setVisible(v=>!v)}>show/hide template</button>
      {visible && <EmailTemplate title="Template rendered on client" content="some content in client" btn="click me" />}
    </main>
  )
}
