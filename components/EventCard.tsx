import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
    image: string;
    title: string;
    slug: string;
    time: string;
    location: string;
    date: string;
}

const EventCard = (props: EventCardProps) => {
  return (
    <Link href={`/events/${props.slug}`} id="event-card">
        <Image src={props.image} alt={props.title} width={410} height={300} className="poster"/>
        <div className="flex flex-row gap-2">
            <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
            <p>{props.location}</p>
        </div>
        <p>{props.title}</p>
        <div className="datetime">
            <div className="flex flex-row gap-2">
                <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                <p>{props.date}</p>
            </div>
            <div className="flex flex-row gap-2">
                <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
                <p>{props.time}</p>
            </div>
        </div>
    </Link>
  )
}

export default EventCard