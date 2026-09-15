import { notFound } from "next/navigation"

// With two root layouts there is no shared root layout for a top-level not-found.tsx,
// so unmatched URLs are routed into the English root layout and rendered as 404 there.
export default function CatchAllNotFound() {
  notFound()
}
