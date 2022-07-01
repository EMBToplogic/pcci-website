import React from "react";
import Link from "next/link";
import Image from "next/image";

// Components

import Header from "../Header";
import Buttons from "../Buttons";
import EventsGridContainer from "../EventsGridContainer";

// CSS

import eventStyles from "../../styles/components/home/Events.module.css";

const Events = ({ events }) => {
  return (
    <div className={eventStyles.events_main}>
      <Header
        title={"Upcoming Events"}
        customButton={
          <Link href='events'>
            <a>
              <Buttons text='See All Events' type='primary' />
            </a>
          </Link>
        }
      />
      <div className={eventStyles.events_inner}>
        {events.map((event) => {
          return <EventsGridContainer event={event} />;
        })}
      </div>
    </div>
  );
};

export default Events;
