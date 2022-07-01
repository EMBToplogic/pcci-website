import dayjs from "dayjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Components

import Buttons from "./Buttons";

// CSS

import eventsGridContainerStyles from "../styles/components/EventsGridContainer.module.css";

// Icons

import { Facebook, Twitter, Linkedin } from "react-feather";

const EventsGridContainer = ({ event }) => {
  return (
    <div
      className={eventsGridContainerStyles.events_grid_container}
      key={event.eventcode}
    >
      <div className={eventsGridContainerStyles.event_image_container}>
        <Image
          src={event.imageurl}
          layout='fill'
          objectFit='cover'
          alt={`${event.title} Event Poster`}
        />
      </div>
      <div className={eventsGridContainerStyles.event_text_container}>
        <h1 className={eventsGridContainerStyles.event_title}>{event.title}</h1>
        <div className={eventsGridContainerStyles.event_type}>
          {event.description}
        </div>
        <div className={eventsGridContainerStyles.event_date}>
          {dayjs(event.eventdate).format("MMM DD, YYYY")}
        </div>
        <div className={eventsGridContainerStyles.event_footer}>
          <Buttons
            text={
              <Link href={event.url ? event.url : "/"}>
                <a>Register</a>
              </Link>
            }
            type='primary'
          />
          <div className={eventsGridContainerStyles.icons_container}>
            <Link href={event.url ? event.url : "/"}>
              <a>
                <Facebook style={{ margin: 10 }} />
              </a>
            </Link>
            <Link href={event.url ? event.url : "/"}>
              <a>
                <Twitter style={{ margin: 10 }} />
              </a>
            </Link>
            <Link href={event.url ? event.url : "/"}>
              <a>
                <Linkedin style={{ margin: 10 }} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGridContainer;
