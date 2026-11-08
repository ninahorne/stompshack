import { createFileRoute } from '@tanstack/react-router'

const FAQS = [
  {
    question: 'Where do you dance?',
    answer: (
      <>
        You can find us on the dance floor at{' '}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Hi-Ho%20Lounge%202239%20St%20Claude%20Ave%20New%20Orleans%2C%20LA%2070116"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:opacity-80"
        >
          Hi-Ho Lounge on 2239 St. Claude Ave
        </a>
        . Every Sunday from 7pm till our feet hurt.
      </>
    ),
  },
  {
    question: 'Do I need to know how to dance?',
    answer:
      'Absolutely not. No experience necessary. At all of our events, we teach at least two dances, so you can show up, learn something new, and jump right in.',
  },
  {
    question: 'What should I wear?',
    answer:
      "Whatever you're comfortable in! Some people like to dress up and others like to dress for the inevitable (getting sweaty.) Leather-soled cowboy boots are helpful but not required.",
  },
  {
    question: 'Do I need a partner?',
    answer:
      "Nope - we usually don't do much partner dancing so, it's a-okay to come by yourself. That being said - you can always bring a friend. Friends who dance together, stay together.",
  },
  {
    question: 'Can allies come?',
    answer:
      "Yes! And thanks for asking. Stomp Shack is an explicitly queer, but not exclusively queer space. If you can respect the community, respect the space, and love dancing with a bunch of queers, you're more than welcome.",
  },
]

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto max-w-4xl px-8">
      <section className="flex flex-col items-center px-4 pt-4 pb-6">
        <img
          src="/stompshack-full.png"
          alt="Stomp Shack"
          className="max-h-[62vh] w-auto max-w-none"
        />
        <p className="mt-3 text-center text-lg font-bold tracking-wide text-white uppercase md:text-xl">
          every sunday night @ 7pm || hi-ho lounge on st. claude
        </p>
      </section>
      <section id="about" className="flex flex-col items-center py-16">
        <img
          src="/stompshack-action-1.jpeg"
          alt="Stomp Shack line dancing"
          className="w-full"
        />
        <p className="mt-8 text-center text-2xl font-bold tracking-wide text-white uppercase md:text-3xl">
          new orleans queer country line dancing
        </p>
      </section>
      <section id="faq" className="py-16 text-white">
        <h2 className="text-5xl font-bold md:text-6xl">FAQ</h2>
        <dl className="mt-8 space-y-8 text-white uppercase">
          {FAQS.map(({ question, answer }) => (
            <div key={question}>
              <dt className="text-2xl font-bold md:text-3xl">{question}</dt>
              <dd className="mt-2 pl-4 text-lg leading-relaxed">{answer}</dd>
            </div>
          ))}
        </dl>
        <img
          src="/stompshack-action-2.jpeg"
          alt="Stomp Shack line dancing"
          className="mt-16 h-48 w-full object-cover"
        />
      </section>
      <section className="py-16 text-white">
        <h2 className="text-5xl font-bold md:text-6xl">ABOUT</h2>
        <div className="mt-8 space-y-6 leading-relaxed uppercase [word-spacing:0.25rem]">
          <p>
            Following in the footsteps of the queer country dance giants, Stud
            Country and Buckwild, Stomp Shack aims to spread the beloved
            tradition of line dancing down to the Gulf South.
          </p>
          <p>
            Based in New Orleans, Stomp Shack hosts line dancing events at our
            neighborhood bar. Led by Haley Rowe-Kadow, a New Orleans local - we
            dance traditional line-dances as well as new dances that are
            hitting the scene seemingly every day now. Though we do dance to
            country music, our tastes run the gamut and we dance to everything
            across musical genres.
          </p>
          <p>
            Stomp Shack&apos;s mission is to spread the pure joy of line
            dancing all around the Big Easy.
          </p>
          <p>
            If you&apos;d like to keep up with us, find us on Instagram (
            <a
              href="https://instagram.com/stompshack"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              @stompshack
            </a>
            ) TikTok (
            <a
              href="https://tiktok.com/@stomp.shack"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              @stomp.shack
            </a>
            ) or if you&apos;re not much of a social media girlie, sign up for
            our newsletter on Substack (
            <a
              href="https://stompshack.substack.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              stompshack.substack.com
            </a>
            )
          </p>
        </div>
      </section>
      <img
        src="/stompshack-action-3.jpeg"
        alt="Stomp Shack line dancing"
        className="h-48 w-full object-cover"
      />
      <section id="contact" className="py-16 text-white">
        <h2 className="text-5xl font-bold md:text-6xl">CONTACT</h2>
        <ul className="mt-8 space-y-4 leading-relaxed uppercase">
          <li>
            email:{' '}
            <a
              href="mailto:stompshacknola@gmail.com"
              className="underline underline-offset-4 hover:opacity-80"
            >
              stompshacknola@gmail.com
            </a>
          </li>
          <li>
            instagram:{' '}
            <a
              href="https://instagram.com/stompshack"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              @stompshack
            </a>
          </li>
          <li>
            tiktok:{' '}
            <a
              href="https://tiktok.com/@stomp.shack"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              @stomp.shack
            </a>
          </li>
          <li>
            substack:{' '}
            <a
              href="https://stompshack.substack.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              stompshack.substack.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
