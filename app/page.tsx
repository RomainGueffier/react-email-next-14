import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-24">
      <h1>React Email runtime rendering test</h1>
      <h2>render</h2>
      <Link href="/render/server">Server component</Link>
      <Link href="/render/client">Client component</Link>
      <Link href="/render/hook">Client hook</Link>
      <h2>renderAsync</h2>
      <Link href="/render-async/server">Server component</Link>
      <Link href="/render-async/client">Client component</Link>
      <Link href="/render-async/hook">Client hook</Link>
    </main>
  )
}
