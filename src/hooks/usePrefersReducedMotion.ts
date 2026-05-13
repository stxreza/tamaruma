"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const getSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerSnapshot = () => false;

/**
 * SSR-safe & reactive ke perubahan preference.
 * Menghindari setState dalam effect (lint rule React 19).
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
