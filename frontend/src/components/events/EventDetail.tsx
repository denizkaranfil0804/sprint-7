import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

function EventDetail({ event }: { event: CampusEvent }) {
  return (
    <article className="detay">
      <h2>{event.title}</h2>
      {event.image && (
        <figure>
          <img src={event.image} alt={`${event.title} afişi`} />
        </figure>
      )}
      <div className="kunye">
        <h3>Etkinlik Künyesi</h3>
        <p><strong>Tarih:</strong> {formatDate(event.date)}, {event.time}</p>
        <p><strong>Yer:</strong> {event.location}</p>
        <p><strong>Kategori:</strong> {event.category}</p>
        <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
      </div>
      <div className="aciklama">
        <h3>Açıklama</h3>
        <p>{event.description}</p>
      </div>
      <Link className="buton" to="/events">&larr; Listeye dön</Link>
      <Link className="buton" to={`/admin/${event.id}/edit`}>Bu etkinliği güncelle</Link>
    </article>
  );
}

export default EventDetail;