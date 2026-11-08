import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <section className="flex min-h-[70vh] items-center justify-center px-8">
        <img
          src="/stompshack-full.png"
          alt="Stomp Shack"
          className="w-full max-w-6xl"
        />
      </section>
      <section id="about" className="p-8">
        <h2 className="text-4xl font-bold">ABOUT</h2>
        <p className="mt-4 text-lg">
          Edit <code>src/routes/index.tsx</code> to get started.
        </p>
      </section>
      <section id="faq" className="p-8">
        <h2 className="text-4xl font-bold">FAQ</h2>
      </section>
      <section id="contact" className="p-8">
        <h2 className="text-4xl font-bold">CONTACT</h2>
      </section>
    </main>
  )
}
