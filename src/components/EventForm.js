import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/eventActions";
import styles from "./EventForm.module.css";

const EventForm = ({ date, setShowForm, user }) => {
  const dispatch = useDispatch();

  //* local states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      user: user.user,
      title,
      description,
      participants: participants.split(","),
      date,
      time,
      duration,
      sessionNotes,
    };

    dispatch(addEvent(event));
    setShowForm(false);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputField}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textareaField}
          required
        />
        <input
          type="text"
          placeholder="Participants (comma separated emails)"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="number"
          placeholder="Duration (hrs)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className={styles.inputField}
          required
        />
        <textarea
          placeholder="Session Notes"
          value={sessionNotes}
          onChange={(e) => setSessionNotes(e.target.value)}
          className={styles.textareaField}
        />
        <button type="submit" className={styles.button}>
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
