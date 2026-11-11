# Kampüs Etkinlikleri - Backend (Sprint 7)

Bu proje, Express.js kullanılarak geliştirilmiş bir REST API backend servisidir. Üniversite kampüs etkinliklerinin yönetilmesi ve listelenmesi amacıyla hazırlanmıştır.

## Öğrenci Bilgileri
* **Ad Soyad:** Deniz Karanfil
* **Öğrenci Numarası:** 2416501047

---

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için sırasıyla şu adımları izleyin:

1. Bağımlılıkları yükleyin:
   ```bash
   npm install

2. Ortam değişkenlerini (.env) ayarlayın (.env.example dosyasını baz alarak .env oluşturun):
Kod snippet'i
PORT=3000

3. Geliştirme modunda sunucuyu başlatın:
Bash
npm run dev

4. API test istekleri backend/requests/kampus-api.json dosyası altında yer almaktadır. Postman'a "Import" ederek tüm testleri gerçekleştirebilirsiniz.

Method        Endpoint      Açıklama                             Başarı Kodu        Hata Kodu
GET,/health    /  Sistem sağlık kontrolü ve öğrenci numarası döner  /  200 OK /  -
GET,/events        /  Bellekteki tüm etkinlikleri listeler  /   200 OK  /  -
GET,/events/:id    /    ID'ye göre tek bir etkinliğin detayını getirir /   200 OK / 404 Not Found
POST,/events      /    Sisteme yeni bir etkinlik ekler  /   201 Created / 400 Bad Request