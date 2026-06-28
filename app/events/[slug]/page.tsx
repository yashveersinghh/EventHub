import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

const EventDetailsWrapper = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <EventDetails slug={slug} />;
};

const EventDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <main>
      <Suspense fallback={<p>Loading event details...</p>}>
        <EventDetailsWrapper params={params} />
      </Suspense>
    </main>
  )
}

export default EventDetailsPage