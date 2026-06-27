import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({ icon, alt, label }: { icon: string, alt: string, label: string }) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
)

const AgendaItems = ({ agenda }: { agenda: string[]}) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agenda.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
)

const EventDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`);
  const { event } = await request.json();
  
  if(!event) return notFound();

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <section id='event'>
      <div className="header">
        <h1>Event description</h1>
        <p>{event.description}</p>
      </div>
      <div className="details">
        <div className="content">
          <Image src={event.image} alt= "Event Banner" width={800} height={800} className="banner" />

          <section className="flex-col gap-2">
            <h2>Overview</h2>
            <p>{event.overview}</p>
          </section>

          <section className="flex-col gap-2">
            <h2>Event Details</h2>
            <EventDetailItem icon="/icons/calendar.svg" alt="Calendar Icon" label={new Date(event.date).toLocaleDateString()} />
            <EventDetailItem icon="/icons/clock.svg" alt="Clock Icon" label={event.time} />
            <EventDetailItem icon="/icons/pin.svg" alt="Location Icon" label={event.location} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode Icon" label={event.mode} />
            <EventDetailItem icon="/icons/audience.svg" alt="Audience Icon" label={event.audience} />
          </section>

          <AgendaItems agenda={event.agenda} />

          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{event.organizer}</p>
          </section>
          <EventTags tags={event.tags} />
        </div>

        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} other attendees and book your spot for this event now!
              </p>
            ) : (
              <p className="text-sm">
                {`You are the first to book a spot for this event! Don't miss out on this opportunity.`}
              </p>
            )}

            <BookEvent />
          </div>
        </aside>
      </div>

      <div className="flex flex-col gap-4 pt-20 w-full">
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
            <EventCard key={similarEvent.title} {...similarEvent}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventDetailsPage