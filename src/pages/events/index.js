import React from 'react'
import { getAllEvents } from '../../data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter }  from 'next/router';


export default function Events() {

  const allEvents = getAllEvents();
  const router = useRouter();

  const handleSearch = (month, year) => {
    const fullPath = `/events/${month}/${year}`
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSelectEvent={handleSearch} />
      <EventList items={allEvents} />
    </div>
  )
}
