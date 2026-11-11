import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Geçerli bir e-posta girin.");
      setSent(false);
    } else {
      setError("");
      setSent(true);
    }
  }

  return (
    <div className="auth-form">
      <h2>Şifremi Unuttum</h2>
      <p>Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.</p>
      {sent && (
        <p className="mesaj mesaj-basari">
          Bağlantı <strong>{email}</strong> adresine gönderildi (demo).
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">E-posta</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <span className="hata-metni">{error}</span>}
        <button type="submit">Bağlantı gönder</button>
      </form>
      <p style={{ marginTop: "1rem" }}><Link to="/login">&larr; Girişe dön</Link></p>
    </div>
  );
}

export default ForgotPasswordPage;