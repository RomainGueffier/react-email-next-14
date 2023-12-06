import Link from "next/link";
import EmailTemplate from "../_email";

export default function Server() {

  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Server</h1>
      <EmailTemplate title="Template rendered on server" content="some content in server" btn="click me" />
    </main>
  )
}