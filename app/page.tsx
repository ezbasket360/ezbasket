import Link from "next/link";

// TODO: replace with EZbasket's real WhatsApp business number.
// Format: country code + number, digits only (no "+", spaces or dashes). e.g. "919876543210"
const WHATSAPP_NUMBER = "910000000000";
const WHATSAPP_MESSAGE =
  "வணக்கம்! நான் EZbasket-ல் ஆர்டர் செய்ய விரும்புகிறேன்.\n\n(உங்கள் பட்டியலை இங்கே எழுதுங்கள்)";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const promises = [
  {
    title: "Hand-picked, every time",
    body: "We choose your rice, dal, oil and vegetables the way we'd choose them for our own kitchen.",
  },
  {
    title: "Nothing swapped without asking",
    body: "If something's out of stock, we message you first — no surprise substitutions in your bag.",
  },
  {
    title: "Not fresh? Replaced free",
    body: "If any item isn't up to the mark, tell us and we'll make it right.",
  },
];

const steps = [
  {
    step: "1",
    title: "Tell us what you need",
    body: "Add items here, or send your list on WhatsApp — a message or a Tamil voice note is fine.",
  },
  {
    step: "2",
    title: "We hand-pick it",
    body: "Fresh stock, checked by us, packed the same day.",
  },
  {
    step: "3",
    title: "Delivered to your door",
    body: "Pay cash when it arrives. No app to install, no account needed to shop.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-16">
      <section className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
          Your neighbourhood grocery
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Your month&apos;s provisions, hand-picked and brought home.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          EZbasket is a small neighbourhood grocery for Tamil families. Tell us
          what your kitchen needs — in Tamil, by WhatsApp, or right here — and we
          pick it with care and bring it to your door.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-block rounded bg-black px-6 py-3 text-white"
          >
            Browse the shop
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-black px-6 py-3"
          >
            Order on WhatsApp · தமிழில் ஆர்டர் செய்யுங்கள்
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {promises.map((promise) => (
          <div key={promise.title}>
            <h2 className="mb-2 text-lg font-semibold">{promise.title}</h2>
            <p className="text-gray-600">{promise.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-dashed border-gray-300 px-6 py-10 text-center">
        <p className="mb-1 text-lg font-semibold">
          உங்கள் வழக்கமான பட்டியல் · Your usual list
        </p>
        <p className="mx-auto max-w-2xl text-gray-600">
          Soon you&apos;ll be able to save your household&apos;s regular
          provisions and reorder the whole month in one tap. We&apos;re building
          it now.
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold">How it works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step}>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-gray-50 px-6 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Why EZbasket</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Big apps are built for speed and impulse. We&apos;re built for the shop
          your family actually plans — honest prices, no gimmicks, and someone
          who picks up the phone.
        </p>
        <Link
          href="/products"
          className="inline-block rounded bg-black px-6 py-3 text-white"
        >
          Browse the shop
        </Link>
      </section>
    </div>
  );
}
