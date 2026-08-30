import Link from "next/link";

const valueProps = [
  {
    title: "Picked, not piled",
    body: "We keep the range small on purpose. Every product earns its place, so you spend less time sifting and more time trusting what's in your basket.",
  },
  {
    title: "Shopping without the faff",
    body: "Browse, add to basket, done. No mazes, no pressure — just a calm, simple way to get what you need.",
  },
  {
    title: "All the way to your door",
    body: "Once you've ordered, we take it from there. Your basket comes to you, so a good shop never means a trip out.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-16">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Good things, brought closer.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          EZbasket puts quality products within everyone&apos;s reach — chosen
          with care, ordered in a few taps, and delivered right to your door.
        </p>
        <Link
          href="/products"
          className="inline-block rounded bg-black px-6 py-3 text-white"
        >
          Start shopping
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title}>
            <h2 className="mb-2 text-lg font-semibold">{prop.title}</h2>
            <p className="text-gray-600">{prop.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg bg-gray-50 px-6 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Why we built EZbasket</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          We think everyone deserves easy access to products they can rely on. So
          we&apos;re building a shop that&apos;s kind to your time, honest about
          what it sells, and happy to come to you.
        </p>
        <Link
          href="/products"
          className="inline-block rounded bg-black px-6 py-3 text-white"
        >
          See what&apos;s in store
        </Link>
      </section>
    </div>
  );
}
