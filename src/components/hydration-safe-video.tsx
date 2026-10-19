"use client";

import {
  forwardRef,
  useSyncExternalStore,
  type ComponentPropsWithoutRef,
} from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Browser video extensions can inject controls before React hydrates, changing
 * the server-rendered DOM. Mount videos just after hydration so those changes
 * cannot invalidate the server snapshot.
 */
export const HydrationSafeVideo = forwardRef<
  HTMLVideoElement,
  ComponentPropsWithoutRef<"video">
>(function HydrationSafeVideo(props, ref) {
  const isHydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isHydrated) {
    return null;
  }

  return <video ref={ref} {...props} />;
});
