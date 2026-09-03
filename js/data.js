/* ============================================================
   Formda — Spor Takviyeleri Blogu
   Mock veri katmanı. Gerçek bir API yerine kullanılan örnek veri.
   Görseller: Unsplash (stok, ücretsiz kullanım).
   ============================================================ */

const CATEGORIES = [
  { id: "hepsi", label: "Tümü", icon: "grid", hue: 210, desc: "Bütün içerikler" },
  { id: "protein", label: "Protein", icon: "bolt", hue: 205, desc: "Whey, izolat, gainer" },
  { id: "vitamin", label: "Vitamin & Mineral", icon: "leaf", hue: 150, desc: "D vitamini, magnezyum, çinko" },
  { id: "yag-yakici", label: "Yağ Yakıcı", icon: "flame", hue: 20, desc: "Termojenik, L-karnitin" },
  { id: "performans", label: "Performans", icon: "activity", hue: 265, desc: "Kreatin, pre-workout, BCAA" },
  { id: "eklem", label: "Eklem & Kemik", icon: "shield", hue: 185, desc: "Omega-3, glutamin, kollajen" },
];

// Sıkça sorulan sorular (akordiyon)
const FAQ = [
  {
    q: "Takviyeler sağlıklı bireyler için güvenli mi?",
    a: "Kaliteli ve bağımsız laboratuvar testinden geçmiş takviyeler, önerilen dozlarda çoğu sağlıklı yetişkin için güvenli kabul edilir. Kronik rahatsızlığın varsa ya da ilaç kullanıyorsan mutlaka hekimine danış.",
  },
  {
    q: "İçeriklerdeki ürün linkleri ne anlama geliyor?",
    a: "Her yazının içinde, o konuyla ilgili örnek bir ürüne yönlendiren bağlantılar bulunur. Bu bağlantılar seni doğrudan mağaza sayfasına götürür; içerik bağımsız biçimde hazırlanır.",
  },
  {
    q: "Whey protein ile bitkisel protein arasındaki fark nedir?",
    a: "Whey hızlı sindirilen, tam amino asit profiline sahip bir süt proteinidir. Bitkisel proteinler (bezelye, pirinç) laktoz içermez ve vegan dostudur; genelde birden fazla kaynak birleştirilerek amino asit profili tamamlanır.",
  },
  {
    q: "Takviyeleri günün hangi saatinde almalıyım?",
    a: "Bu, takviyenin türüne göre değişir. Kreatin gün içinde herhangi bir saatte alınabilirken, protein genelde antrenman çevresinde; magnezyum ise uyku kalitesi için akşam tercih edilir.",
  },
  {
    q: "İçerikler bir sağlık tavsiyesi mi?",
    a: "Hayır. Tüm yazılar bilgilendirme amaçlıdır ve profesyonel sağlık tavsiyesinin yerine geçmez. Kişisel durumun için bir sağlık uzmanına başvur.",
  },
];

// Not: her yazıda "shopUrl" gerçek projede e-ticaret ürün sayfasına gider.
const POSTS = [
  {
    id: 1,
    title: "Whey Protein Nedir? Yeni Başlayanlar İçin Tam Rehber",
    excerpt:
      "Whey protein türleri, ne zaman ve ne kadar tüketilmeli? Kas gelişimi için bilmen gereken her şey sade bir dille.",
    category: "protein",
    categoryLabel: "Protein",
    author: "Deniz Yılmaz",
    authorAvatar: "https://i.pravatar.cc/120?img=12",
    date: "2 Eylül 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80",
    tags: ["whey", "kas gelişimi", "başlangıç"],
    price: "749",
    oldPrice: "899",
    shopUrl: "#urun-whey",
    featured: true,
  },
  {
    id: 2,
    title: "Kreatin Monohidrat: Performansı Gerçekten Artırır mı?",
    excerpt:
      "Bilimsel çalışmalar ışığında kreatinin güç, dayanıklılık ve toparlanma üzerindeki etkilerini inceledik.",
    category: "performans",
    categoryLabel: "Performans",
    author: "Elif Kaya",
    authorAvatar: "https://i.pravatar.cc/120?img=32",
    date: "31 Ağustos 2025",
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    tags: ["kreatin", "güç", "performans"],
    price: "499",
    oldPrice: null,
    shopUrl: "#urun-kreatin",
  },
  {
    id: 3,
    title: "D Vitamini Eksikliği ve Sporcu Performansına Etkisi",
    excerpt:
      "Güneş vitamini olarak bilinen D vitamininin eksikliği antrenman verimini nasıl düşürür?",
    category: "vitamin",
    categoryLabel: "Vitamin & Mineral",
    author: "Dr. Mert Aydın",
    authorAvatar: "https://i.pravatar.cc/120?img=51",
    date: "29 Ağustos 2025",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    tags: ["d vitamini", "bağışıklık", "sağlık"],
    price: "289",
    oldPrice: "349",
    shopUrl: "#urun-dvitamini",
  },
  {
    id: 4,
    title: "Yağ Yakıcılar Hakkında Bilmen Gereken 7 Gerçek",
    excerpt:
      "Termojenik takviyeler nasıl çalışır, kimler kullanmalı, yan etkileri neler? Abartısız bir değerlendirme.",
    category: "yag-yakici",
    categoryLabel: "Yağ Yakıcı",
    author: "Selin Demir",
    authorAvatar: "https://i.pravatar.cc/120?img=45",
    date: "27 Ağustos 2025",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    tags: ["yağ yakıcı", "diyet", "metabolizma"],
    price: "399",
    oldPrice: "459",
    shopUrl: "#urun-yagyakici",
  },
  {
    id: 5,
    title: "BCAA mı Yoksa EAA mı? Amino Asit Karşılaştırması",
    excerpt:
      "Dallı zincirli amino asitler ile esansiyel amino asitler arasındaki farkı net biçimde açıklıyoruz.",
    category: "performans",
    categoryLabel: "Performans",
    author: "Elif Kaya",
    authorAvatar: "https://i.pravatar.cc/120?img=32",
    date: "25 Ağustos 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1200&q=80",
    tags: ["bcaa", "eaa", "amino asit"],
    price: "349",
    oldPrice: null,
    shopUrl: "#urun-bcaa",
  },
  {
    id: 6,
    title: "Omega-3 ve Eklem Sağlığı: Sporcular İçin Önemi",
    excerpt:
      "Balık yağı takviyeleri eklem ağrılarını azaltır mı? Doğru doz ve kaliteli ürün seçimi üzerine.",
    category: "eklem",
    categoryLabel: "Eklem & Kemik",
    author: "Dr. Mert Aydın",
    authorAvatar: "https://i.pravatar.cc/120?img=51",
    date: "23 Ağustos 2025",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1200&q=80",
    tags: ["omega-3", "eklem", "balık yağı"],
    price: "279",
    oldPrice: "319",
    shopUrl: "#urun-omega3",
  },
  {
    id: 7,
    title: "Antrenman Öncesi (Pre-Workout) Takviyeler Nasıl Seçilir?",
    excerpt:
      "Kafein, beta-alanin, sitrülin... Pre-workout içeriklerini ve doğru kullanımını inceledik.",
    category: "performans",
    categoryLabel: "Performans",
    author: "Deniz Yılmaz",
    authorAvatar: "https://i.pravatar.cc/120?img=12",
    date: "21 Ağustos 2025",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=1200&q=80",
    tags: ["pre-workout", "kafein", "enerji"],
    price: "589",
    oldPrice: "699",
    shopUrl: "#urun-preworkout",
  },
  {
    id: 8,
    title: "Magnezyum: Kramp ve Uyku İçin Sessiz Kahraman",
    excerpt:
      "Sporcularda magnezyum eksikliği neden yaygın? Kas kramplarını önlemek için doğru form hangisi?",
    category: "vitamin",
    categoryLabel: "Vitamin & Mineral",
    author: "Selin Demir",
    authorAvatar: "https://i.pravatar.cc/120?img=45",
    date: "19 Ağustos 2025",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    tags: ["magnezyum", "uyku", "kramp"],
    price: "229",
    oldPrice: null,
    shopUrl: "#urun-magnezyum",
  },
  {
    id: 9,
    title: "Kilo Almak İsteyenler İçin Mass Gainer Rehberi",
    excerpt:
      "Zor kilo alanlar (hardgainer) için kalori açığını kapatmanın pratik ve sağlıklı yolları.",
    category: "protein",
    categoryLabel: "Protein",
    author: "Deniz Yılmaz",
    authorAvatar: "https://i.pravatar.cc/120?img=12",
    date: "17 Ağustos 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1200&q=80",
    tags: ["gainer", "kilo alma", "kalori"],
    price: "829",
    oldPrice: "949",
    shopUrl: "#urun-gainer",
  },
  {
    id: 10,
    title: "Glutamin Toparlanmayı Hızlandırır mı?",
    excerpt:
      "Yoğun antrenman sonrası kas onarımı ve bağışıklık için glutaminin rolüne dair güncel bulgular.",
    category: "eklem",
    categoryLabel: "Eklem & Kemik",
    author: "Elif Kaya",
    authorAvatar: "https://i.pravatar.cc/120?img=32",
    date: "15 Ağustos 2025",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["glutamin", "toparlanma"],
    price: "319",
    oldPrice: null,
    shopUrl: "#urun-glutamin",
  },
  {
    id: 11,
    title: "Çinko ve Bağışıklık: Kış Aylarında Sporcu Beslenmesi",
    excerpt:
      "Ağır antrenman bağışıklığı baskılar. Çinko takviyesi bu dönemde nasıl destek olur?",
    category: "vitamin",
    categoryLabel: "Vitamin & Mineral",
    author: "Dr. Mert Aydın",
    authorAvatar: "https://i.pravatar.cc/120?img=51",
    date: "13 Ağustos 2025",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1616196334218-1c9e2e4c1f0e?auto=format&fit=crop&w=1200&q=80",
    tags: ["çinko", "bağışıklık", "kış"],
    price: "199",
    oldPrice: "239",
    shopUrl: "#urun-cinko",
  },
  {
    id: 12,
    title: "L-Karnitin: Yağ Yakımında Efsane mi Gerçek mi?",
    excerpt:
      "L-karnitinin yağ metabolizmasındaki rolü ve kardiyo ile birlikte kullanımı üzerine dürüst bir bakış.",
    category: "yag-yakici",
    categoryLabel: "Yağ Yakıcı",
    author: "Selin Demir",
    authorAvatar: "https://i.pravatar.cc/120?img=45",
    date: "11 Ağustos 2025",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1200&q=80",
    tags: ["l-karnitin", "kardiyo", "yağ yakımı"],
    price: "269",
    oldPrice: "299",
    shopUrl: "#urun-lkarnitin",
  },
];

// Basit istatistikler (hero altında güven bandı)
const STATS = [
  { value: "120+", label: "Bilimsel içerik" },
  { value: "45K", label: "Aylık okuyucu" },
  { value: "%100", label: "Bağımsız inceleme" },
  { value: "4.9", label: "Okuyucu puanı" },
];

window.SITE_DATA = { CATEGORIES, POSTS, STATS, FAQ };
