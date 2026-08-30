"use client";
import { useEffect, useState } from "react";

const DISMISS_KEY = "ezbasket-install-hint-dismissed";

/**
 * A small one-time hint shown only to iPhone/iPad Safari visitors who haven't
 * installed the app yet. Android/Chrome shows its own install prompt, so this
 * stays hidden there.
 */
export function InstallHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // storage blocked — just show the hint
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari exposes this non-standard flag when launched from the home screen
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    // Detection depends on browser-only APIs, so it has to run after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isIOS && !isStandalone) setShow(true);
  }, []);

  if (!show) return null;

  function dismiss() {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 sm:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <p>
          Add EZbasket to your home screen: tap{" "}
          <span aria-hidden>⎋</span> Share, then{" "}
          <span className="font-medium">Add to Home Screen</span>.
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded px-2 py-1 text-gray-500"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
