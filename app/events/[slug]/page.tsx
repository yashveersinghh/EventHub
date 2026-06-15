import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { events } from "@/lib/constants";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
        <span>←</span>
        Back to events
      </Link>

      <div className="mt-8 overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <Image
          src={event.image}
          alt={event.title}
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
          priority
        />

        <div className="space-y-6 p-8 md:p-10">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Event details</p>
            <h1 className="text-3xl font-semibold text-white md:text-5xl">{event.title}</h1>
          </div>

          <div className="grid gap-4 text-white/80 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Location</p>
              <p className="mt-2 text-lg">{event.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Date</p>
              <p className="mt-2 text-lg">{event.date}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Time</p>
              <p className="mt-2 text-lg">{event.time}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}