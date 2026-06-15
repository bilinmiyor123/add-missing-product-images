import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Award, Users, Anchor, Fish, Waves, Ship } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Kalite Odaklı",
      description: "Her ürünümüzde en yüksek kalite standartlarını garanti ediyoruz.",
    },
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin memnuniyeti bizim için her şeyden önce gelir.",
    },
    {
      icon: Award,
      title: "Uzmanlık",
      description: "25 yıllık tecrübemizle sektörün öncüsüyüz.",
    },
    {
      icon: Users,
      title: "Güvenilirlik",
      description: "Binlerce mutlu müşterimizin güvenini kazandık.",
    },
  ]

  const team = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      image: "/team-member-1.jpg",
      description: "25 yıllık balıkçılık deneyimi",
    },
    {
      name: "Mehmet Kaya",
      role: "Ürün Müdürü",
      image: "/team-member-2.jpg",
      description: "Ürün geliştirme uzmanı",
    },
    {
      name: "Ayşe Demir",
      role: "Müşteri İlişkileri",
      image: "/team-member-3.jpg",
      description: "Müşteri hizmetleri lideri",
    },
    {
      name: "Fatma Şahin",
      role: "Satış Direktörü",
      image: "/team-member-4.jpg",
      description: "Satış ve pazarlama uzmanı",
    },
  ]

  const milestones = [
    {
      year: "2000",
      title: "Kuruluş",
      description: "BalıkAvı, küçük bir aile işletmesi olarak yolculuğuna başladı.",
    },
    {
      year: "2008",
      title: "Online Mağaza",
      description: "Türkiye'nin ilk online balıkçılık ekipmanları mağazasını açtık.",
    },
    {
      year: "2015",
      title: "Marka Ortaklıkları",
      description: "Dünya çapında tanınmış markalarla ortaklık kurduk.",
    },
    {
      year: "2025",
      title: "Sektör Lideri",
      description: "50,000+ mutlu müşteri ve 10,000+ ürün çeşidiyle sektörün lideri olduk.",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Mutlu Müşteri",
    },
    {
      icon: Fish,
      value: "10,000+",
      label: "Ürün Çeşidi",
    },
    {
      icon: Anchor,
      value: "25",
      label: "Yıllık Tecrübe",
    },
    {
      icon: Ship,
      value: "100+",
      label: "Dünya Markası",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/fishing-hero-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">Hakkımızda</Badge>
          <h1 className="mb-6 text-4xl font-bold text-white text-balance md:text-5xl">
            Denizin Tutkusunu Paylaşıyoruz
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 text-pretty leading-relaxed">
            1999 yılından bu yana Türkiye'nin en büyük balıkçılık ekipmanları tedarikçisi olarak, profesyonel ve amatör
            balıkçılara en kaliteli ürünleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance">Hikayemiz ve Yolculuğumuz</h2>
            <p className="text-muted-foreground text-pretty">Kurulduğumuz günden bugüne gelişimimiz</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start mb-8">
            <div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  BalıkAvı, 1999 yılında balıkçılık tutkusu olan bir grup arkadaş tarafından kuruldu. Küçük bir
                  dükkandan başlayan yolculuğumuz, bugün Türkiye'nin en büyük online balıkçılık ekipmanları mağazasına
                  dönüştü.
                </p>
                <p>
                  Amacımız, her zaman en kaliteli ürünleri en uygun fiyatlarla müşterilerimize sunmak oldu. Bu ilke
                  doğrultusunda, dünya çapında tanınmış markalarla ortaklıklar kurduk ve geniş bir ürün yelpazesi
                  oluşturduk.
                </p>
                <p>
                  Bugün 50,000'den fazla mutlu müşterimiz ve 10,000'den fazla ürün çeşidimizle sektörün lideri
                  konumundayız. Ancak en büyük gururumuz, müşterilerimizin güvenini kazanmış olmak.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl lg:h-[500px]">
              <img
                src="/images/design-mode/depositphotos_50243141-stock-photo-fisherman.jpg"
                alt="BalıkAvı Hikayesi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    <span className="text-sm font-bold">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="ml-24 transition-all hover:shadow-lg md:ml-0">
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance">Değerlerimiz</h2>
            <p className="text-muted-foreground text-pretty">Başarımızın arkasındaki temel değerler</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-1.5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance">Ekibimiz</h2>
            <p className="text-muted-foreground text-pretty">Başarımızın arkasındaki yetenekli ekip</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/design-mode/depositphotos_416311890-stock-photo-portrait-senior-man-fishing-sea.jpg"
                  alt="Balıkçılık Topluluğu"
                  className="h-full object-cover w-[90%]"
                />
              </div>
              <div className="flex items-center p-8 lg:p-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-balance">Topluluğumuza Katılın</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    BalıkAvı ailesi olarak, sadece ürün satmıyoruz. Balıkçılık tutkusunu paylaşan bir topluluk
                    oluşturuyoruz. Blog yazılarımızı okuyun, deneyimlerinizi paylaşın, yeni insanlarla tanışın.
                  </p>
                  <div className="flex gap-4">
                    <a href="/blog" className="inline-block">
                      <Card className="cursor-pointer p-4 transition-all hover:shadow-lg">
                        <div className="flex items-center gap-2">
                          <Waves className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Blog</span>
                        </div>
                      </Card>
                    </a>
                    <a href="/iletisim" className="inline-block">
                      <Card className="cursor-pointer p-4 transition-all hover:shadow-lg">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span className="font-semibold">İletişim</span>
                        </div>
                      </Card>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
