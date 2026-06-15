import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Truck, Shield, HeadphonesIcon, CreditCard } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Profesyonel Olta Kamışı",
      price: "2.499 ₺",
      image: "/professional-fishing-rod.jpg",
      badge: "Yeni",
    },
    {
      id: 2,
      name: "Makara Seti - Pro Series",
      price: "1.899 ₺",
      image: "/fishing-reel-set.jpg",
      badge: "Popüler",
    },
    {
      id: 3,
      name: "Balık Yemleri Koleksiyonu",
      price: "349 ₺",
      image: "/fishing-lures-collection.jpg",
      badge: "İndirim",
    },
    {
      id: 4,
      name: "Su Geçirmez Balıkçı Çantası",
      price: "899 ₺",
      image: "/waterproof-fishing-bag.jpg",
      badge: null,
    },
  ]

  const categories = [
    {
      name: "Olta Kamışları",
      image: "/fishing-rods-collection.jpg",
      count: "120+ Ürün",
    },
    {
      name: "Makaralar",
      image: "/fishing-reels.png",
      count: "85+ Ürün",
    },
    {
      name: "Yemler ve Misinalar",
      image: "/fishing-baits-and-lines.png",
      count: "200+ Ürün",
    },
    {
      name: "Balıkçı Kıyafetleri",
      image: "/fishing-clothing-and-gear.png",
      count: "65+ Ürün",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/ocean-waves-fishing-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative flex items-center h-full px-4 mx-auto w-auto">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-balance md:text-6xl">
              Denizin Tutkusunu Yaşayın
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 text-pretty">
              Profesyonel balıkçılık ekipmanları ve av malzemeleri ile tutkulu balıkçılar için en kaliteli ürünler.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/urunler">
                <Button size="lg" variant="secondary" className="gap-2">
                  Ürünleri Keşfet
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/hakkimizda">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                >
                  Hakkımızda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b bg-muted/30 py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Ücretsiz Kargo</h3>
                <p className="text-sm text-muted-foreground">500 ₺ üzeri</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Güvenli Alışveriş</h3>
                <p className="text-sm text-muted-foreground">SSL Sertifikalı</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">7/24 Destek</h3>
                <p className="text-sm text-muted-foreground">Müşteri hizmetleri</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Kolay İade</h3>
                <p className="text-sm text-muted-foreground">15 gün içinde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-2.5">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Kategoriler</h2>
            <p className="text-muted-foreground text-pretty">İhtiyacınız olan her şey bir arada</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link href="/urunler" key={index}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-1 font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Öne Çıkan Ürünler</h2>
            <p className="text-muted-foreground text-pretty">En popüler ve yeni ürünlerimiz</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link href={`/urun/${product.id}`} key={product.id}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative">
                    {product.badge && (
                      <Badge className="absolute right-2 top-2 z-10 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-semibold text-balance">{product.name}</h3>
                    <p className="text-xl font-bold text-primary">{product.price}</p>
                    <Button className="mt-4 w-full bg-transparent" variant="outline">
                      Detayları Gör
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/urunler">
              <Button size="lg" className="gap-2">
                Tüm Ürünleri Görüntüle
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Bültenimize Katılın</h2>
            <p className="mb-8 text-lg text-white/90 text-pretty">
              Yeni ürünler ve özel kampanyalardan haberdar olmak için abone olun
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 rounded-lg px-4 py-3 text-foreground bg-white"
              />
              <Button variant="secondary" size="lg">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
