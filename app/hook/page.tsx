"use client"
import { Template } from "@/templates/email"
import { render } from "jsx-email"
import Link from "next/link"
import { useState } from "react"

const useForm = () => {
  const [html, setHtml] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)

    const btnText = data.get("btn")!.toString()
    const title = data.get("title")!.toString()

    const templateOutput = await render(
      <Template email="test@test.test" name={title} btn={btnText} />
    )
    if (templateOutput) setHtml(templateOutput)
    else console.error("error while generating template")
    setLoading(false)
  }

  return { handleSubmit, html, loading }
}

export default function Client() {
  const { handleSubmit, html, loading } = useForm()

  return (
    <main className="space-y-8 p-24 bg-slate-900 h-screen text-white">
      <Link href="/">back home</Link>
      <h1>Client form hook</h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow space-y-2 bg-slate-700 w-fit"
      >
        <input
          type="text"
          name="btn"
          placeholder="button text"
          className="block p-1 text-black"
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          className="block p-1 text-black"
        />
        <input
          type="submit"
          value="send"
          className="border rounded hover:scale-105 cursor-pointer p-1"
        />
      </form>
      <h2>Sent email:</h2>
      {loading ? (
        <p className="animate-bounce">loading...</p>
      ) : (
        <code className="block rounded w-full min-w-[600px] p-1 bg-black text-white text-xs whitespace-pre-wrap">
          {html}
        </code>
      )}
    </main>
  )
}
