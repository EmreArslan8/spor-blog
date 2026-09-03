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

/* ------------------------------------------------------------
   Yazı içerikleri — her yazı için özgün, zengin gövde.
   intro: giriş paragrafı | takeaways: öne çıkanlar
   body: bölümlerden oluşan HTML
   ------------------------------------------------------------ */
const AUTHORS = {
  "Deniz Yılmaz": "Beslenme ve takviye içerikleri üzerine yazan spor bilimci. 8 yıldır sporcularla çalışıyor.",
  "Elif Kaya": "Egzersiz fizyolojisi uzmanı. Performans takviyeleri ve antrenman biliminde uzmanlaşmıştır.",
  "Dr. Mert Aydın": "Beslenme ve diyetetik doktoru. Mikrobesin eksiklikleri üzerine araştırmalar yürütüyor.",
  "Selin Demir": "Sağlık editörü ve diyetisyen. Kilo yönetimi ve metabolizma konularında içerik üretir.",
};

const POST_CONTENT = {
  1: {
    intro: "Whey protein, dünyada en çok araştırılan ve en çok kullanılan spor takviyelerinden biri. Peki bu kadar popüler olması boşuna mı? Yeni başlayanlar için türlerini, dozunu ve zamanlamasını sade bir dille topladık.",
    takeaways: ["Whey; konsantre, izolat ve hidrolizat olmak üzere üç ana forma sahiptir.", "Günlük protein hedefini tamamlamak için pratik bir araçtır, sihirli bir toz değildir.", "Zamanlamadan çok, gün boyu toplam protein alımı önemlidir."],
    body: [
      "<h2>Whey protein tam olarak nedir?</h2>",
      "<p>Whey (peynir altı suyu proteini), sütün peynire dönüşmesi sırasında ayrışan sıvı kısımdan elde edilir. Tam bir amino asit profiline sahiptir ve özellikle kas onarımında rol oynayan <strong>lösin</strong> bakımından zengindir. Hızlı sindirilmesi, onu antrenman çevresinde pratik bir seçenek yapar.</p>",
      "<h2>Türleri arasındaki fark</h2>",
      "<ul class='dots'><li><strong>Konsantre:</strong> En yaygın ve ekonomik form; %70–80 protein içerir, az miktarda laktoz ve yağ barındırır.</li><li><strong>İzolat:</strong> Daha ileri filtrelenmiştir; %90+ protein, çok düşük laktoz. Laktoz hassasiyeti olanlar için uygundur.</li><li><strong>Hidrolizat:</strong> Ön-sindirilmiş form; en hızlı emilir, genelde en pahalısıdır.</li></ul>",
      "<h2>Ne kadar ve ne zaman?</h2>",
      "<p>Genel öneri, günlük <strong>1.6–2.2 g/kg</strong> protein almaktır. Bunu önce gerçek besinlerden karşılamayı hedefle; açık kalırsa whey ile tamamla. Tek seferde 20–40 g tipik bir servistir.</p>",
      "<blockquote>Antrenmandan hemen sonraki 'anabolik pencere' abartılmıştır. Asıl belirleyici, gün içindeki toplam protein alımıdır.</blockquote>",
    ],
  },
  2: {
    intro: "Kreatin, üzerinde en çok çalışma yapılmış ve güvenliği en net kanıtlanmış performans takviyesidir. Etkisi 'hissedilen' değil, ölçülebilen bir takviyeden bahsediyoruz.",
    takeaways: ["Kısa süreli, yüksek şiddetli eforda güç ve tekrar sayısını artırır.", "Günde 3–5 g monohidrat çoğu kişi için yeterlidir; yükleme şart değildir.", "Su tutulumu kaynaklı hafif kilo artışı normaldir ve kas kaybı değildir."],
    body: [
      "<h2>Nasıl çalışır?</h2>",
      "<p>Kaslarda <strong>fosfokreatin</strong> deposunu artırarak, ATP'nin (hücresel enerji) hızlı yeniden üretimini destekler. Bu da özellikle 1–10 saniyelik patlayıcı eforlarda daha fazla tekrar ve daha yüksek güç anlamına gelir.</p>",
      "<h2>Doz ve kullanım</h2>",
      "<ul class='dots'><li><strong>Basit yol:</strong> Her gün 3–5 g, günün herhangi bir saatinde.</li><li><strong>Yükleme (opsiyonel):</strong> 5–7 gün boyunca günde 20 g (4'e bölünmüş), sonra 3–5 g idame.</li><li>Kafeinle birlikte alınması etkisini önemli ölçüde azaltmaz.</li></ul>",
      "<h2>Güvenlik</h2>",
      "<p>Sağlıklı bireylerde uzun dönem kullanımı güvenli bulunmuştur. Böbrek rahatsızlığın varsa hekimine danış. 'Kreatin böbreklere zarar verir' söylemi, sağlıklı kişilerde bilimsel destekten yoksundur.</p>",
    ],
  },
  3: {
    intro: "D vitamini yalnızca kemik sağlığı için değil; kas fonksiyonu, bağışıklık ve toparlanma için de kritik. Özellikle kış aylarında sporcularda eksikliği yaygındır.",
    takeaways: ["Güneşe sınırlı maruz kalan sporcularda eksiklik sık görülür.", "Eksiklik; yorgunluk, sık hastalanma ve performans düşüşüyle ilişkilidir.", "Takviyeye başlamadan önce kan değerini ölçtürmek en doğrusudur."],
    body: [
      "<h2>Neden bu kadar önemli?</h2>",
      "<p>D vitamini bir hormon gibi davranır ve yüzlerce genin ifadesinde rol oynar. Kas liflerindeki reseptörleri aracılığıyla <strong>kas gücü ve toparlanmayı</strong> etkiler. Düşük seviyeler, antrenman verimini sessizce düşürebilir.</p>",
      "<h2>Belirtiler ve risk grupları</h2>",
      "<ul class='dots'><li>Kapalı alanda antrenman yapan sporcular</li><li>Koyu ten tonuna sahip bireyler</li><li>Kuzey enlemlerde yaşayanlar ve kış ayları</li></ul>",
      "<h2>Ne yapmalı?</h2>",
      "<p>Önce <strong>25-OH D vitamini</strong> kan testi yaptır. Eksiklik varsa, hekimin önerdiği dozda takviye ve mümkünse düzenli güneşlenme en etkili kombinasyondur.</p>",
    ],
  },
  4: {
    intro: "'Yağ yakıcı' etiketi çok şey vaat eder ama gerçek beklentiden çoğu zaman uzaktır. İşte pazarlama gürültüsünün altındaki 7 gerçek.",
    takeaways: ["Hiçbir takviye, kalori açığı olmadan yağ yakmaz.", "Etkileri genelde küçük ve destekleyicidir, belirleyici değildir.", "Yüksek kafein içerikleri uyku ve kaygıyı olumsuz etkileyebilir."],
    body: [
      "<h2>1–3: Temel gerçekler</h2>",
      "<ul class='dots'><li>Termojenikler metabolizmayı hafifçe hızlandırır; bu fark günlük birkaç yüz kaloriyi geçmez.</li><li>Kalori açığı olmadan hiçbir etki kalıcı yağ kaybına dönüşmez.</li><li>Çoğu formül, ana etkisini yüksek doz <strong>kafeinden</strong> alır.</li></ul>",
      "<h2>4–7: Dikkat edilmesi gerekenler</h2>",
      "<ul class='dots'><li>Akşam kullanımı uyku kalitesini bozabilir; uyku ise yağ kaybının gizli kahramanıdır.</li><li>Tolerans gelişir; sürekli artan dozlar sürdürülebilir değildir.</li><li>Kalp çarpıntısı, huzursuzluk gibi yan etkiler olabilir.</li><li>Etiketteki 'gizli karışım' (proprietary blend) içerik dozunu gizleyebilir.</li></ul>",
      "<blockquote>Yağ yakıcı bir takviye değil, kalori açığı + protein + uyku + hareket kombinasyonudur.</blockquote>",
    ],
  },
  5: {
    intro: "BCAA yıllarca popüler oldu, ama bilim EAA lehine ilerledi. İkisi arasındaki farkı ve senin için hangisinin mantıklı olduğunu netleştirelim.",
    takeaways: ["BCAA, 9 esansiyel amino asidin yalnızca 3'ünü içerir.", "Kas protein sentezi için tüm esansiyel amino asitler (EAA) gerekir.", "Yeterli protein alan biri için ikisi de çoğu zaman gereksizdir."],
    body: [
      "<h2>Tanımlar</h2>",
      "<p><strong>BCAA</strong> (dallı zincirli): lösin, izolösin, valin. <strong>EAA</strong> (esansiyel): bu üçü dahil, vücudun üretemediği 9 amino asidin tamamı.</p>",
      "<h2>Neden EAA öne çıktı?</h2>",
      "<p>Kas protein sentezini tetiklemek için lösin şarttır, ancak yapı taşlarının <strong>tamamı</strong> olmadan sentez sürdürülemez. Bu yüzden tek başına BCAA, EAA kadar etkili değildir.</p>",
      "<h2>Kime gerekli?</h2>",
      "<ul class='dots'><li>Günlük protein hedefini rahat karşılayan biri: genelde gerek yok.</li><li>Aç karına antrenman yapan veya vegan/düşük protein alan sporcular: EAA mantıklı olabilir.</li></ul>",
    ],
  },
  6: {
    intro: "Omega-3, eklem konforu ve genel sağlık için en çok konuşulan yağ asitleri. Ama her balık yağı ürünü aynı değil; kalite ve doz belirleyici.",
    takeaways: ["EPA ve DHA, omega-3'ün asıl etkili formlarıdır.", "Eklem sertliğini ve antrenman sonrası ağrıyı azaltmaya yardımcı olabilir.", "Etiketteki toplam yağ değil, EPA+DHA miktarı önemlidir."],
    body: [
      "<h2>EPA & DHA farkı</h2>",
      "<p>Bir balık yağı kapsülünde '1000 mg' yazması, o kadar omega-3 aldığın anlamına gelmez. Asıl bakman gereken, kapsül başına <strong>EPA + DHA</strong> toplamıdır.</p>",
      "<h2>Eklem sağlığına etkisi</h2>",
      "<p>Omega-3'ün anti-inflamatuar etkisi, yoğun antrenman yapanlarda eklem konforunu ve toparlanmayı destekleyebilir. Etki dramatik değil, ama tutarlı kullanımda anlamlıdır.</p>",
      "<h2>Kaliteli ürün seçimi</h2>",
      "<ul class='dots'><li>Kapsül başına yüksek EPA+DHA</li><li>Oksidasyon (bozulma) değeri düşük, tazelik sertifikalı ürünler</li><li>Ağır metal arındırma testinden geçmiş markalar</li></ul>",
    ],
  },
  7: {
    intro: "Pre-workout ürünleri enerji vaat eder, ama içerik listeleri çoğu zaman karmaşık ve abartılıdır. Hangi bileşen ne işe yarıyor, sade bir rehber.",
    takeaways: ["Etkili bileşenler genelde kafein, sitrülin ve beta-alanindir.", "'Gizli karışım' etiketleri doz şeffaflığını gizleyebilir.", "Akşam antrenmanlarında yüksek kafein uykuyu bozabilir."],
    body: [
      "<h2>İşe yarayan bileşenler</h2>",
      "<ul class='dots'><li><strong>Kafein:</strong> Odak ve algılanan eforu iyileştirir (etkili doz 3–6 mg/kg).</li><li><strong>L-sitrülin:</strong> Kan akışını ve pompayı destekler (6–8 g).</li><li><strong>Beta-alanin:</strong> Dayanıklılığa yardımcı olur; ciltte karıncalanma normaldir.</li></ul>",
      "<h2>Dikkat edilecekler</h2>",
      "<p>Doz şeffaf olmayan formüllerden kaçın. Kafein toleransın düşükse, akşam seansları için kafeinsiz seçenekleri değerlendir.</p>",
      "<blockquote>İyi bir uyku ve öğün, çoğu pre-workout'tan daha güçlü bir 'enerji takviyesidir'.</blockquote>",
    ],
  },
  8: {
    intro: "Magnezyum; kas kasılması, sinir iletimi ve uyku için gerekli, ama sporcularda sıkça eksik kalan bir mineral. Doğru form ve zamanlama fark yaratır.",
    takeaways: ["Terle magnezyum kaybı sporcularda eksikliği artırır.", "Kramp ve uyku kalitesiyle ilişkilidir.", "Emilimi yüksek formlar (sitrat, glisinat) tercih edilmelidir."],
    body: [
      "<h2>Neden sporcularda önemli?</h2>",
      "<p>Magnezyum 300'den fazla enzimatik tepkimede görev alır. Yoğun terleme ve stres, ihtiyacı artırırken depoları azaltır. Eksiklik; kramp, huzursuzluk ve kötü uyku olarak kendini gösterebilir.</p>",
      "<h2>Hangi form?</h2>",
      "<ul class='dots'><li><strong>Magnezyum sitrat:</strong> İyi emilir, ekonomik.</li><li><strong>Magnezyum glisinat:</strong> Mideyi az yorar, uyku için tercih edilir.</li><li>Oksit formu ucuzdur ama emilimi düşüktür.</li></ul>",
      "<h2>Ne zaman almalı?</h2>",
      "<p>Uyku kalitesi için akşam, yemekle birlikte almak yaygın ve etkili bir yaklaşımdır.</p>",
    ],
  },
  9: {
    intro: "Kilo almakta zorlananlar (hardgainer) için mesele iştah ve kalori. Mass gainer bu açığı kapatmanın pratik bir yolu olabilir, ama bilinçli kullanılmalı.",
    takeaways: ["Gainer, esasen yoğun kalori ve karbonhidrat kaynağıdır.", "Gerçek besinlerin yerini almamalı, açığı kapatmalıdır.", "Şeker oranı yüksek ürünlerden kaçınmak gerekir."],
    body: [
      "<h2>Kime uygun?</h2>",
      "<p>Bol yemesine rağmen kilo alamayan, hızlı metabolizmalı kişiler için gainer, günlük kalori hedefine ulaşmayı kolaylaştırır. Zaten kolay kilo alanlar için gereksizdir.</p>",
      "<h2>Nasıl seçmeli?</h2>",
      "<ul class='dots'><li>Kaliteli karbonhidrat kaynağı (yulaf gibi), aşırı şeker değil</li><li>Yeterli protein oranı (servis başına 25–50 g)</li><li>Sindirimi kolay bir formül</li></ul>",
      "<h2>Ev yapımı alternatif</h2>",
      "<p>Yulaf, süt, muz, fıstık ezmesi ve whey ile hazırlanan bir smoothie, çoğu ticari gainerle yarışabilir ve daha ekonomiktir.</p>",
    ],
  },
  10: {
    intro: "Glutamin, vücutta en bol bulunan amino asit. Toparlanma ve bağışıklık için pazarlanır, ama kanıtlar sağlıklı sporcular için beklenenden mütevazı.",
    takeaways: ["Vücut glutamini kendi üretebilir (şartlı esansiyel).", "Yoğun stres/hastalık dışında ek fayda sınırlı olabilir.", "Bağırsak ve bağışıklık sağlığıyla ilişkilendirilir."],
    body: [
      "<h2>Ne işe yarar?</h2>",
      "<p>Glutamin, bağışıklık hücreleri ve bağırsak epiteli için önemli bir yakıttır. Çok yoğun antrenman dönemlerinde depoları geçici olarak azalabilir.</p>",
      "<h2>Kanıt ne diyor?</h2>",
      "<p>Sağlıklı ve yeterli protein alan sporcularda, kas gelişimi veya performans üzerindeki etkisi genelde <strong>küçüktür</strong>. Asıl fayda; ağır stres, yaralanma veya hastalık dönemlerinde görülebilir.</p>",
      "<h2>Kimler değerlendirebilir?</h2>",
      "<ul class='dots'><li>Çok yüksek hacimli antrenman yapanlar</li><li>Sindirim/bağışıklık desteği arayan bireyler (hekim önerisiyle)</li></ul>",
    ],
  },
  11: {
    intro: "Çinko; bağışıklık, hormon dengesi ve toparlanma için kritik bir eser element. Özellikle kış aylarında ve yoğun antrenman dönemlerinde önemi artar.",
    takeaways: ["Çinko eksikliği bağışıklığı zayıflatır.", "Terle kayıp yaşandığından sporcularda ihtiyaç artabilir.", "Aşırı doz bakır emilimini bozabilir; ölçülü kullanılmalı."],
    body: [
      "<h2>Bağışıklıktaki rolü</h2>",
      "<p>Çinko, bağışıklık hücrelerinin normal çalışması için gereklidir. Eksikliğinde enfeksiyonlara yatkınlık artar; bu da antrenman düzenini bozar.</p>",
      "<h2>Sporcu için önemi</h2>",
      "<p>Yoğun egzersiz ve terleme çinko kaybını artırır. Kış aylarında dengeli beslenme + gerektiğinde ölçülü takviye, bağışıklık için akıllıca bir kombinasyondur.</p>",
      "<h2>Dikkat</h2>",
      "<blockquote>Uzun süre yüksek doz çinko, bakır eksikliğine yol açabilir. 'Çok daha iyidir' mantığı burada geçerli değildir.</blockquote>",
    ],
  },
  12: {
    intro: "L-karnitin, yağ metabolizmasındaki rolüyle bilinir ve sıkça 'yağ yakıcı' olarak pazarlanır. Gerçek etkisi ise beklentiden daha nüanslı.",
    takeaways: ["Yağ asitlerinin hücre içinde enerjiye dönüşmesinde rol oynar.", "Tek başına dramatik yağ kaybı sağlamaz.", "Etkisi düzenli egzersizle birlikte anlam kazanır."],
    body: [
      "<h2>Biyolojik rolü</h2>",
      "<p>L-karnitin, yağ asitlerini hücrelerin enerji santrali olan <strong>mitokondriye</strong> taşır. Teorik olarak bu, yağın yakıt olarak kullanımını destekler.</p>",
      "<h2>Efsane mi, gerçek mi?</h2>",
      "<p>Takviye olarak alındığında etkisi genelde <strong>mütevazıdır</strong> ve ancak düzenli egzersiz + kalori açığıyla birlikte fark yaratabilir. Tek başına 'yağ eritici' beklentisi gerçekçi değildir.</p>",
      "<h2>Kullanım</h2>",
      "<ul class='dots'><li>Genelde 1–2 g/gün dozunda kullanılır.</li><li>Kardiyo ile birleştirildiğinde daha anlamlı olabilir.</li></ul>",
    ],
  },
};

window.SITE_DATA = { CATEGORIES, POSTS, STATS, FAQ, AUTHORS, POST_CONTENT };
