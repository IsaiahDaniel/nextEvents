import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../data/";

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
