import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../types/campus-event";
import EventForm from "../components/forms/EventForm";

const emptyForm: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  capacity: "",
  description: ""
};

function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  function handleSubmit(data: EventFormData) {
    addEvent(data);
    navigate("/admin");
  }

  return (
    <div>
      <h2>Etkinlik Ekle</h2>
      <EventForm initialData={emptyForm} submitText="Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}

export default AddEventPage;