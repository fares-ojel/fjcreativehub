# FJ Creative Hub - Docker Deployment Rehberi

Bu klasör, siteyi Ubuntu sunucunuzda Docker ile ayağa kaldırıp CloudPanel
üzerinden reverse proxy ile yayınlamanız için hazırlanmıştır.

## Klasör Yapısı

```
.
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
└── site/                <- Sitenin tüm dosyaları (html, css, js, assets)
```

## 1) Sunucuya Yükleme

Bu klasörün tamamını sunucunuzda istediğiniz bir dizine kopyalayın, örneğin:

```bash
scp -r fjcreativehub-deploy kullanici@sunucu_ip:/home/kullanici/
ssh kullanici@sunucu_ip
cd /home/kullanici/fjcreativehub-deploy
```

## 2) Docker ile Build & Çalıştırma

Docker ve Docker Compose sunucuda kurulu olmalıdır. Sonrasında:

```bash
docker compose up -d --build
```

Bu komut:
- `nginx:1.27-alpine` tabanlı bir imaj oluşturur,
- Site dosyalarını `/usr/share/nginx/html` içine kopyalar,
- Temiz URL yapısı (uzantısız linkler) için özel `nginx.conf` dosyasını kullanır,
- Container'ı yalnızca `127.0.0.1:7070` üzerinden erişilebilir şekilde ayağa kaldırır
  (dışarıya doğrudan açık değildir; CloudPanel reverse proxy üzerinden erişilir).

Kontrol etmek için sunucu üzerinde:

```bash
curl -I http://127.0.0.1:7070/
```

`200 OK` dönüyorsa container sorunsuz çalışıyor demektir.

## 3) CloudPanel'de Reverse Proxy Kurulumu

1. CloudPanel panelinde ilgili site (fjcreativehub.com) için bir **Reverse Proxy**
   site tipi oluşturun (veya mevcut siteyi Reverse Proxy'e çevirin).
2. **Reverse Proxy URL** alanına şunu girin:
   ```
   http://127.0.0.1:7070
   ```
3. SSL sekmesinden Let's Encrypt sertifikasını oluşturup HTTPS'i etkinleştirin
   (CloudPanel bunu otomatik yönetir; nginx.conf içinde ekstra bir işlem
   yapmanıza gerek yoktur, container yalnızca HTTP/80 üzerinden yayın yapar).
4. Kaydedip siteyi ziyaret ederek doğrulayın:
   - `https://fjcreativehub.com/` → ana sayfa
   - `https://fjcreativehub.com/services` → hizmetler sayfası
   - `https://fjcreativehub.com/about` → hakkımızda sayfası
   - `https://fjcreativehub.com/contact` → iletişim sayfası
   - `https://fjcreativehub.com/about.html` gibi eski uzantılı bir bağlantı
     otomatik olarak `/about` adresine 301 yönlendirilmelidir.

## 4) Güncelleme Yaparken

Site dosyalarında değişiklik yaptığınızda:

```bash
docker compose up -d --build
```

komutunu tekrar çalıştırmanız yeterlidir; container yeniden oluşturulur.

## 5) Logları İzleme

```bash
docker compose logs -f
```

## Notlar

- Container dışarıya yalnızca `127.0.0.1:7070` üzerinden bağlanır; bu sayede
  sunucunuzun genel IP'sinden 7070 portuna doğrudan erişim engellenmiş olur,
  trafik yalnızca CloudPanel'in reverse proxy'si (Nginx) üzerinden gelir.
- Dil tespiti (AR / TR / EN) tamamen istemci (tarayıcı) tarafında, ziyaretçinin
  IP adresi üzerinden genel bir GeoIP servisine (GeoJS, yedek olarak ipapi.co)
  yapılan istekle gerçekleştirilir; sunucu tarafında ek bir yapılandırma
  gerekmez. Sunucunuzun bu servislere (get.geojs.io, ipapi.co) giden dış
  bağlantılara (HTTPS/443) izin verdiğinden emin olun; aksi halde sistem
  otomatik olarak tarayıcı diline, o da bulunamazsa İngilizce'ye düşer.
