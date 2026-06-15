import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for All Your Events <br /> Events You Cannot Miss</h1>
      <p className="text-center text-lg text-muted-foreground mt-5">
        Discover the latest and greatest events in the world of software development. <br /> hackathons, conferences, webinars, and more - all in one place.
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Upcoming Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.slug}>
              <EventCard { ...event }/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page