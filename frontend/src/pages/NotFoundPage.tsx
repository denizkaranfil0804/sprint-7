import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h2>404 - Sayfa Bulunamadı</h2>
      <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link className="buton" to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default NotFoundPage;