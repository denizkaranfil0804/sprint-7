import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import type { Category } from "../types/campus-event";
import { searchEvents, filterByCategory } from "../utils/filter-events";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";

function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const filtered = filterByCategory(searchEvents(events, searchText), category);

  return (
    <>
      <h2>Tüm Etkinlikler</h2>
      <EventFilter
        searchText={searchText}
        category={category}
        onSearchChange={setSearchText}
        onCategoryChange={setCategory}
      />
      <p>{filtered.length} etkinlik listeleniyor.</p>
      <EventList events={filtered} emptyText="Bu kriterlere uygun etkinlik bulunamadı." />
    </>
  );
}

export default EventsPage;