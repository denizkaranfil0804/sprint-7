import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import { findEventById } from "../../utils/filter-events";
import Navigation from "./Navigation";

function Header() {
  const location = useLocation();
  const { events } = useEvents();
  const pathname = location.pathname;

  let title = "Kampüs Etkinlikleri";
  let text: string | undefined = "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.";

  if (pathname === "/") {
    title = "Kampüs Etkinlikleri";
    text = "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.";
  } else if (pathname === "/events") {
    title = "Tüm Etkinlikler";
    text = "Ekim ayında kampüste düzenlenen etkinlikler.";
  } else if (pathname === "/admin") {
    title = "Etkinlik Yönetimi";
    text = undefined;
  } else if (pathname === "/login") {
    title = "Giriş Yap";
    text = undefined;
  } else if (pathname === "/register") {
    title = "Kayıt Ol";
    text = undefined;
  } else if (pathname === "/forgot-password") {
    title = "Şifremi Unuttum";
    text = undefined;
  } else if (pathname === "/admin/new") {
    title = "Etkinlik Ekle";
    text = undefined;
  } else if (pathname.startsWith("/admin/") && pathname.endsWith("/edit")) {
    title = "Etkinlik Güncelle";
    text = undefined;
  } else if (pathname.startsWith("/events/")) {
    const id = pathname.replace("/events/", "");
    const event = findEventById(events, id);
    if (event) {
      title = event.title;
      text = `${event.category} - ${event.location}`;
    } else {
      title = "Sayfa Bulunamadı";
      text = undefined;
    }
  } else {
    title = "Sayfa Bulunamadı";
    text = undefined;
  }

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri - ${title}`;
  }, [title]);

  return (
    <div className="ust-alan">
      <header className="site-baslik">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </header>
      <Navigation />
    </div>
  );
}

export default Header;