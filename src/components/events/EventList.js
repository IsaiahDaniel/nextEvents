import React from 'react';
import EventItem from './EventItem';
import classes from "../../styles/event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
        { items?.map(item => (
            <EventItem event={item} key={item.id} />
        )) }
    </ul>
  );
}
