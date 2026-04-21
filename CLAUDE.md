---
name: senaiaksoy.net
description: Doç. Dr. Senai Aksoy'un resmi hekim kimlik sitesi. Statik, minimal; CV + iletişim + yasal sayfalar. Makale/blog yayınlamaz. T.C. SB + TTB + Uluslararası Sağlık Turizmi mevzuatına sıkı uyum.
version: 2.0
last-updated: 2026-04-21
---

# senaiaksoy.net — Proje Anayasası

Bu site **Doç. Dr. Senai Aksoy**'un Türkiye'deki resmi hekim kimlik sayfasıdır. **Bilinçli olarak minimal** tutulmuştur: amaç hem Sağlık Bakanlığı ve TTB mevzuatına katı uyum sağlamak, hem de sağlık turizmi sertifikalı hekim için zorunlu olan **yerel/uluslararası site ayrımını** temiz tutmaktır. Uluslararası hasta hizmetleri ayrı bir site üzerinden yürütülür: [draksoyivf.com](https://draksoyivf.com) (EN/FR/AR).

> **Knowledge backend:** Editöryal kurallar, marka kimliği ve tıbbi referans tabanı ayrı bir Obsidian vault'ta (`D:\A-klasör\obsidian-vaults\draksoyivf-knowledge`) tutulur. Çelişki durumunda **vault kazanır**.

---

## 1. Site kapsamı (HARD CONSTRAINT)

**Bu site ne YAPAR:**
- Dr. Aksoy'un kimliğini, akademik geçmişini, uzmanlık alanlarını sunar
- Muayenehane iletişim bilgilerini verir (adres, telefon, e-posta, harita, ulaşım, çalışma saatleri)
- Yasal zorunlu sayfaları barındırır (KVKK, Çerez, Tıbbi Sorumluluk Reddi)
- Uluslararası hastayı draksoyivf.com'a yönlendirir (nötr, İngilizce, tek bağ)
- Sosyal medya hesaplarına ve akademik kimliklere (PubMed, ORCID, Scholar) link verir

**Bu site ne YAPMAZ (HARD CONSTRAINT):**
- **Makale / blog yayınlamaz.** Türkçe tıbbi içerik bu sitede üretilmez. Dr. Aksoy'un Türkçe yayın faaliyeti tupbebek.com (baş editör) ve estranova.com (tıbbi inceleme) üzerinden yürütülür.
- Tedavi/hizmet sayfaları yoktur (menüde "Tedavilerimiz" yok)
- Fiyat, paket, kampanya, indirim bilgisi taşımaz
- Başarı oranı/istatistik sunmaz
- Hasta tanıklığı, before-after, vaka detayı barındırmaz
- Agresif CTA ("Randevu Al", "Hemen Ara", "Rezervasyon") kullanmaz
- **Dil switcher (EN/FR/AR buton grubu) bulundurmaz** — sadece tek nötr "For International Patients" bağı

---

## 2. Yasal çerçeve (HARD CONSTRAINT)

Site üç mevzuat rejimi altında çalışır:

| Rejim | Yürürlük | Kapsam |
|---|---|---|
| **Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği** | 12 Kasım 2025 (RG 33075) | Tüm içerik; yurt içi tanıtım sınırları |
| **Türk Tabipleri Birliği Hekimlik Meslek Etiği Kuralları** (HMEK md. 11) | 1998- | Dil-bağımsız; reklam, tanıtım, meslektaş eleştirisi |
| **Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik** | 26 Nisan 2025 (RG 32882) | Yerel/uluslararası site ayrımı zorunluluğu (Madde 8) |

**Sağlık Turizmi Yetki Belgesi No: ST-1008**

### Mutlak yasaklar (tüm içerikte)
- Fiyat, paket, kampanya, indirim, "ücretsiz danışma"
- Başarı oranı iddiası ("%X gebelik oranımız")
- Hasta tanıklığı, teşekkür mesajı, before-after görseli
- Üstünlük iddiası ("en iyi", "rakipsiz", "Türkiye'nin ilki", "lider", "öncü")
- Rakip klinik/hekim adı vererek eleştiri (TTB md. 11)
- Çekiliş, hediye, teşvik
- Onaysız/rızasız iletişim çağrıları (SMS/e-posta/DM satış)
- "Garanti", "kesin sonuç", "%100", "mucize"

### Yasak: ekosistem üretim kuralı
- **Ajans/SEO şirketi/sosyal medya ekibi Dr. Aksoy adına tıbbi içerik üretemez.** (SB 2025 + TTB 2025 Kılavuzu)
- Bu site zaten makale yayınlamıyor, ama mevcut sayfaların (ana sayfa bio, uzmanlık alanları özeti) metinleri **hekim imzalı** olmalıdır.

### Zorunlu içerikler (sitede görünür)
- Hekim adı + uzmanlık dalı + akademik unvan ✓
- Çalışma saatleri + muayenehane adresi ✓
- KVKK Aydınlatma Metni ✓
- Çerez Politikası ✓
- Tıbbi Sorumluluk Reddi ✓
- Diploma Tescil No, V.D. ✓
- Uluslararası Sağlık Turizmi Yetki Belgesi No (ST-1008) ✓
- Health Türkiye logosu ✓ (ancak bu TR site için stilt zorunlu değildir; draksoyivf tarafında zorunlu)
- Son güncelleme tarihi ✓
- Site editörü iletişim bilgisi ✓
- Standart bilgilendirme uyarısı: *"Sonuçlar kişiden kişiye değişir; teşhis ve tedavi için hekiminize başvurunuz."* ✓

---

## 3. Ekosistem — Dr. Aksoy'un dijital varlıkları

Dr. Aksoy'un Türkiye + uluslararası dijital ekosisteminde bu sitenin rolü:

| Site | Dil | Rol | Mevzuat rejimi |
|---|---|---|---|
| **senaiaksoy.net** (bu) | TR | Doktor resmi kimlik sitesi (statik) | T.C. SB + TTB (en katı) |
| **draksoyivf.com** | EN / FR / AR | Uluslararası hasta hizmeti | Sağlık turizmi (Mad. 8 ayrımı) |
| **tupbebek.com** | TR | Bağımsız üreme sağlığı yayın portali; Dr. Aksoy baş editör | Yayın/portal rejimi |
| **estranova.com** | TR (+ ileride intl.) | 40+ kadın sağlık yayını; Dr. Aksoy tıbbi inceleme | Yayın rejimi |

**Site içi atıf kuralı:**
- draksoyivf.com'a tek bir **nötr İngilizce** bağ ("For International Patients →") — header + ana sayfada görünür kart + footer'da metin. Dil switcher formu **yasak**.
- tupbebek.com'a atıf: Dr. Aksoy'un baş editörlüğünün **kariyer bilgisi** olarak belirtilmesi (pasif). Site içinde "tupbebek'teki makalelerimi okuyun" şeklinde aktif CTA yok.
- estranova.com — bu sitede açık referans şu an yok; eklenmesi durumunda benzer pasif kariyer notu tonunda olmalı.

---

## 4. Teknik mimari (mevcut)

- **Framework:** Astro (static-first)
- **Analytics:** Google Analytics, **yalnızca çerez onayı verildiğinde** yüklenir (`Layout.astro` içinde koşullu)
- **Sayfalar** (bu noktada):
  - `/` (ana sayfa) — bio + sosyal + iletişim özeti + International Patients kartı + Editör notu + sertifikalar
  - `/contact` — adres, harita, ulaşım, iletişim kanalları
  - `/kvkk` — KVKK Aydınlatma Metni
  - `/cerez-politikasi` — Çerez Politikası
  - `/tibbi-sorumluluk-reddi` — Tıbbi Sorumluluk Reddi
- **Bileşenler:** Header, Footer, ContactInfo, BioModal, SocialLinks, CookieBanner
- **Yönlendirmeler:** `src/redirects.js`

### Yeni sayfa ekleme kuralı
Yeni sayfa eklenecekse:
- Statik-CV rejimine uygun olmalı (CV/bilgi/yasal, makale değil)
- `/uzmanlik-alanlari` (opsiyonel), `/hakkimda` (opsiyonel) gibi bilgilendirme sayfaları uygun
- Blog, tedaviler, fiyat, vaka, referans gibi sayfalar **eklenmez**

---

## 5. International Patients yönlendirme kuralları

draksoyivf.com'a bağlantı iki yerde görünür:
1. **Header:** `For International Patients →` (tek nötr İngilizce bağ, `lang="en"`)
2. **Ana sayfa kartı:** İngilizce kısa açıklama + "Visit draksoyivf.com →" butonu
3. **Footer:** gerekli değil; header ve ana sayfa kartı yeterli. Eklenirse yine nötr metin olmalı.

**Yasak kalıplar:**
- EN | FR | AR biçiminde 3 ayrı dil bağı (dil switcher)
- "Yabancı hastalar için özel fiyatlar / paketler / indirimler" (Türkçe tanıtım)
- "Tedaviniz için draksoyivf'i ziyaret edin" (TR dilinde satış CTA)
- Türkiye'den gelen ziyaretçiyi zorla yönlendiren otomatik redirect

**İzinli kalıplar:**
- "For international patients" başlığı altında tek link
- Kart içinde "Available in English, Français, العربية" bilgi etiketi (tıklanabilir değil)
- draksoyivf.com'un kendi dil seçicisine güvenmek

---

## 6. Google Ads / SEO / Sosyal medya (site ötesi ama ilgili)

Bu kurallar draksoyivf.com için geçerli; bu sitede uygulamaz ama ekosistem bütünlüğü için referans:
- **draksoyivf.com reklamlarında Türkiye coğrafi hedefleme HARİÇ tutulur.** (SB 2025 Madde 8)
- Türkçe arama terimleri draksoyivf reklam kampanyalarında **negative keyword**
- senaiaksoy.net reklamı yapılıyorsa yalnızca yurt içi + sağlık bilgilendirme amaçlı (ticari değil)

---

## 7. Yaptırımlar (bilgi amaçlı)

Yeni yönetmeliklerdeki yaptırım rejimi:
- **SB para cezası:** 1. tespit min. 100.000 TL veya brüt gelirin %1'i (hangisi yüksekse); tekrarında iki katına kadar artırılabilir; 3. tespitte 2 gün faaliyet durdurma
- **Sağlık turizmi ihlali:** Yetki belgesi 3-6 ay askıya alma veya iptal
- **TTB:** Uyarma → para cezası → 15 gün-6 ay meslekten men
- **Ağır ihlal:** Erişim engeli (5651 sayılı Kanun)

---

## 8. Bakım

- Her içerik/metin değişikliğinde Footer'daki `lastUpdated` tarihi güncellenir
- Belge, yetki, mevzuat değişikliğinde CLAUDE.md'nin **Yasal çerçeve** bölümü revize edilir
- Site editörü iletişim: `dr@senaiaksoy.net`

---

## Related (vault referansları)

- `CLAUDE.md` (vault anayasası, üst kural seti)
- `wiki/00-index.md` — vault girişi
- `wiki/sites/senaiaksoy/editorial-rules.md` — saha-düzeyi
- `wiki/sites/senaiaksoy/tc-compliance.md` — mevzuat detayı
- `wiki/brand/compliance.md` — ekosistem uyumluluk matrisi
- `wiki/sites/draksoyivf/multilingual-rules.md` — site ayrımı ve yönlendirme detayı
