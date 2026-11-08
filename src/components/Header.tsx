const NAV_LINKS = [
  { label: 'ABOUT', id: 'about' },
  { label: 'FAQ', id: 'faq' },
  { label: 'CONTACT', id: 'contact' },
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
  return (
    <header className="bg-pop text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-2xl font-bold tracking-wide hover:opacity-80"
        >
          STOMP SHACK
        </a>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(id)
              }}
              className="font-bold tracking-wide hover:opacity-80"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
