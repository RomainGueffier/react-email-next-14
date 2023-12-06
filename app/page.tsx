import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-24">
      <h1>React Email runtime rendering test</h1>
      <Link href="/server">Server rendered email</Link>
      <Link href="/client">Client rendered email</Link>
    </main>
  )
}
