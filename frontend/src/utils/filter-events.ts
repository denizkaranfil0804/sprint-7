import type { CampusEvent, Category } from "../types/campus-event";

export function searchEvents(events: CampusEvent[], text: string): CampusEvent[] {
  const q = text.toLowerCase().trim();
  if (!q) return events;
  return events.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.location.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q)
  );
}

export function filterByCategory(events: CampusEvent[], cat: Category | ""): CampusEvent[] {
  if (!cat) return events;
  return events.filter((e) => e.category === cat);
}

export function findEventById(events: CampusEvent[], id: string): CampusEvent | undefined {
  return events.find((e) => e.id === id);
}