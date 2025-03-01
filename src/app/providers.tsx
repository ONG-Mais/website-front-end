"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
  });
}

type Provider = {
  children: ReactNode;
};
export function CSPostHogProvider({ children }: Provider) {
  console.log(posthog);
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
