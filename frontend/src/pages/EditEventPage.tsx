import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { findEventById } from "../utils/filter-events";
import type { EventFormData } from "../types/campus-event";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage";

function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = findEventById(events, id ?? "");
  if (!event) return <NotFoundPage />;

  const initialData: EventFormData = {
    title: event.title,
    category: event.category,
    date: event.date,
    time: event.time,
    location: event.location,
    capacity: String(event.capacity),
    description: event.description
  };

  function handleSubmit(data: EventFormData) {
    if (id) {
      updateEvent(id, data);
      navigate("/admin");
    }
  }

  return (
    <div>
      <h2>Etkinlik Güncelle</h2>
      <EventForm initialData={initialData} submitText="Güncelle" onSubmit={handleSubmit} />
    </div>
  );
}

export default EditEventPage;