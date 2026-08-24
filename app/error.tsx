"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-4 text-2xl font-bold">Something went wrong</h1>
      <p className="mb-8 text-gray-600">Please try again.</p>
      <button
        onClick={reset}
        className="inline-block rounded bg-black px-6 py-3 text-white"
      >
        Try again
      </button>
    </div>
  );
}
