import React from "react";
import classes from "../../styles/event-item.module.css";
import Button from "../ui/Button";

import { MdOutlineDateRange, MdOutlineEditLocation, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function EventItem({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={'/' + event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>

          <div className={classes.date}>
            <MdOutlineDateRange />
            <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            <MdOutlineEditLocation />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={{ pathname: `/events/${event.id}` }}>
            <span>Expore Events</span>
            <span className={classes.icon}>
              <AiOutlineArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
