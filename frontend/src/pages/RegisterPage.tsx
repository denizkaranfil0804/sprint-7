import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; password2?: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found: typeof errors = {};

    if (name.trim().length < 3) found.name = "Ad en az 3 karakter olmalı.";
    if (!email.includes("@")) found.email = "Geçerli e-posta girin.";
    if (password.length < 6) found.password = "Şifre en az 6 karakter olmalı.";
    if (password2 !== password) found.password2 = "Şifreler aynı değil.";

    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  }

  return (
    <div className="auth-form">
      <h2>Kayıt Ol</h2>
      {sent && <p className="mesaj mesaj-basari">Kayıt oluşturuldu (Demo).</p>}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Ad Soyad</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="hata-metni">{errors.name}</span>}

        <label htmlFor="email">E-posta</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="hata-metni">{errors.email}</span>}

        <label htmlFor="password">Şifre</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span className="hata-metni">{errors.password}</span>}

        <label htmlFor="password2">Şifre (tekrar)</label>
        <input id="password2" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
        {errors.password2 && <span className="hata-metni">{errors.password2}</span>}

        <button type="submit">Kayıt ol</button>
      </form>
      <p style={{ marginTop: "1rem" }}><Link to="/login">Zaten hesabın var mı? Giriş yap</Link></p>
    </div>
  );
}

export default RegisterPage;