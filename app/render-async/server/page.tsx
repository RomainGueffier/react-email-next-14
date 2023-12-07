import Link from "next/link"
import EmailTemplate from "@/app/render-async/_renderAsync"

export default function Server() {
  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Server with RENDER ASYNC</h1>
      <EmailTemplate
        title="Template rendered on server"
        content="some content in server"
        btn="click me"
      />
    </main>
  )
}
