import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database/event.model";
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  'use cache';
  cacheLife('hours');
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();
  const eventCount = events?.length ?? 0;
  return (
    <section className="space-y-20 pb-12" id="home">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Curated for builders, developers, and students</p>
          <h1>The hub for events you actually want to attend</h1>
          <p className="subheading max-w-2xl text-balance">
            Discover hackathons, conferences, webinars, and community meetups in one polished place.
            Stay ahead of what’s happening without the clutter.
          </p>

          <div className="hero-actions">
            <ExploreBtn />
          </div>

          <div className="hero-stats">
            <div>
              <span>{eventCount}</span>
              <p>Live events</p>
            </div>
            <div>
              <span>Verified</span>
              <p>Trusted listings</p>
            </div>
            <div>
              <span>Curated</span>
              <p>Handpicked events</p>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-glow" />
          <div className="hero-panel-card">
            <p className="panel-label">WHY EVENTHUB?</p>
            <h3>Everything you need to discover tech events</h3>
            <p>
              Stay up to date with the latest hackathons, conferences, workshops,<br /> and tech meetups happening around you.
            </p>
            
          </div>
        </div>
      </div>

      <div id="events" className="section-shell scroll-mt-24">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What’s next</p>
            <h3>Upcoming Events</h3>
          </div>
          <p>
            Fresh listings, sharper spacing, and hover states that feel deliberate instead of loud.
          </p>
        </div>

        <ul className="events">
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key={event.slug} className="list-none">
              <EventCard { ...event }/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page