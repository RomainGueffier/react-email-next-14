import Link from "next/link"
import EmailTemplate from "../_email"

export default function Server() {
  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Server</h1>
      <EmailTemplate
        name="Template rendered on server"
        email="test@test.test"
        btn="click me"
      />
    </main>
  )
}
