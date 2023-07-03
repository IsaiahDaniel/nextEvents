import React from "react";
import { useRouter } from "next/router";

import EventsList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getFilteredEvents } from "../../data";

export default function EventsFilter() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <h2>Loading...</h2>;
  }

  const filteredMonth = filterData[0];
  const filteredYear = filterData[1];

  const numMonth = +filteredMonth;
  const numYear = +filteredYear;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter Data</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <h2>No Matches with your filtred criateria</h2>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
}
