import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/eventActions";
import EventForm from "./EventForm";

const CalendarComponent = ({ user }) => {
  const dispatch = useDispatch();

  //* redux state
  const events = useSelector((state) => state.events.events);

  //* local states
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState(null);

  //* Effects
  useEffect(() => {
    dispatch(fetchEvents(user.user._id));
  }, [user.user._id, dispatch]);

  const handleDateClick = (info) => {
    setDate(info.dateStr);
    setShowForm(true);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          title: event.title,
          description: event.description,
          start: `${event.date}T${event.time}:00`,
          end: `${event.date}T${parseInt(event.time) + event.duration}:00`,
        }))}
        dateClick={handleDateClick}
      />
      {showForm && (
        <EventForm date={date} setShowForm={setShowForm} user={user} />
      )}
    </div>
  );
};

export default CalendarComponent;
