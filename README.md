# Formda — Spor Takviyeleri Blogu (Demo)

Modern, **ferah** ve **responsive** editoryal blog arayüzü demosu. Saf **HTML + CSS + JS**
ile geliştirildi; hiçbir build adımı veya framework gerektirmez. Mock veri ve
Unsplash stok görselleri kullanır.

> Referans senaryo: "Spor takviyeleri hakkında blog sayfası + e-ticaret sitesine
> yönlendirme butonları içeren site." Her yazının altında ve ürün kutularında
> mağazaya yönlendiren **"Ürüne Git / Mağazada İncele"** CTA'ları bulunur.

## Çalıştırma

Statik bir sitedir; herhangi bir sunucuya gerek yok. İki yol:

```bash
# 1) Doğrudan tarayıcıda aç
open index.html        # macOS  (Linux: xdg-open, Windows: start)

# 2) Basit yerel sunucu (görsellerin sorunsuz yüklenmesi için önerilir)
python3 -m http.server 8000
# → http://localhost:8000
```

## Özellikler

- 🎨 **Ferah tasarım sistemi** — CSS değişkenleri, yumuşak gölge/rounded, bol boşluk
- 🌗 **Açık / Koyu tema** — tercih `localStorage`'da saklanır, sistem temasını algılar
- 📱 **Tam responsive** — mobil hamburger menü, akışkan grid, `clamp()` tipografi
- 🔎 **Canlı arama** (debounce) + **kategori filtreleme** çipleri
- 🛒 **E-ticaret yönlendirme butonları** — ilanın çekirdek gereksinimi
- ✨ **Scroll animasyonları** — `IntersectionObserver` ile fade-in
- ⬆️ **Yukarı çık** butonu, sticky şeffaf→dolu header, toast bildirimleri
- 📄 **Blog detay sayfası** (`post.html?id=`) — ilgili yazılar + ürün kutusu
- ♿ Erişilebilirlik — anlamlı `aria` etiketleri, klavye odağı, `reduced-motion`

## Dosya yapısı

```
index.html        Ana sayfa (hero, blog grid, öne çıkan, bülten, footer)
post.html         Blog detay sayfası (query string ile içerik)
css/style.css     Tasarım sistemi ve tüm stiller
js/data.js        Mock içerik verisi (12 yazı, kategoriler, istatistik)
js/main.js        Etkileşim: filtre, arama, tema, menü, animasyon
```

Tüm içerik ve fiyatlar **örnek/demo** amaçlıdır.
