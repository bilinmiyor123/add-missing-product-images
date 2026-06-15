import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, Truck, CheckCircle, MapPin, Clock, Phone } from "lucide-react"

export default function SiparisTakibiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Package className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="mb-4 text-4xl font-bold text-balance">Sipariş Takibi</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Siparişinizin durumunu takip edin ve kargo bilgilerinize ulaşın
              </p>
            </div>
          </div>
        </section>

        {/* Tracking Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl">
              <CardHeader>
                <CardTitle>Sipariş Sorgulama</CardTitle>
                <CardDescription>
                  Sipariş numaranızı ve e-posta adresinizi girerek siparişinizi sorgulayabilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="order-number" className="text-sm font-medium">
                    Sipariş Numarası
                  </label>
                  <Input id="order-number" placeholder="Örn: BA2025-12345" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta Adresi
                  </label>
                  <Input id="email" type="email" placeholder="ornek@email.com" className="h-12" />
                </div>
                <Button className="w-full h-12" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Siparişi Sorgula
                </Button>
              </CardContent>
            </Card>

            {/* Example Order Status */}
            <div className="mx-auto mt-12 max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold">Sipariş Durumu</h2>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Sipariş #BA2025-12345</CardTitle>
                      <CardDescription className="mt-1">Sipariş Tarihi: 15 Ocak 2025</CardDescription>
                    </div>
                    <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                      Kargoya Verildi
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Timeline */}
                  <div className="relative space-y-8 pl-8">
                    <div className="absolute left-[11px] top-2 h-[calc(100%-2rem)] w-0.5 bg-primary"></div>

                    <div className="relative">
                      <CheckCircle className="absolute -left-8 h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Sipariş Alındı</p>
                        <p className="text-sm text-muted-foreground">15 Ocak 2025, 14:30</p>
                        <p className="mt-1 text-sm">Siparişiniz başarıyla alındı ve hazırlanmaya başlandı</p>
                      </div>
                    </div>

                    <div className="relative">
                      <CheckCircle className="absolute -left-8 h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Hazırlandı</p>
                        <p className="text-sm text-muted-foreground">15 Ocak 2025, 18:45</p>
                        <p className="mt-1 text-sm">Siparişiniz paketlendi ve kargoya hazır hale getirildi</p>
                      </div>
                    </div>

                    <div className="relative">
                      <Truck className="absolute -left-8 h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Kargoya Verildi</p>
                        <p className="text-sm text-muted-foreground">16 Ocak 2025, 09:15</p>
                        <p className="mt-1 text-sm">Kargo Takip No: 1234567890</p>
                      </div>
                    </div>

                    <div className="relative opacity-50">
                      <Package className="absolute -left-8 h-6 w-6" />
                      <div>
                        <p className="font-semibold">Teslim Edildi</p>
                        <p className="text-sm text-muted-foreground">Bekleniyor</p>
                      </div>
                    </div>
                  </div>

                  {/* Kargo Bilgileri */}
                  <div className="rounded-lg bg-muted/50 p-6">
                    <h3 className="mb-4 font-semibold">Kargo Bilgileri</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <Truck className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Kargo Firması</p>
                          <p className="text-sm text-muted-foreground">Aras Kargo</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Teslimat Adresi</p>
                          <p className="text-sm text-muted-foreground">İstanbul, Kadıköy</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Tahmini Teslimat</p>
                          <p className="text-sm text-muted-foreground">18 Ocak 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">İletişim</p>
                          <p className="text-sm text-muted-foreground">444 25 52</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sipariş Detayları */}
                  <div>
                    <h3 className="mb-4 font-semibold">Sipariş Detayları</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <img
                          src="/professional-fishing-rod.jpg"
                          alt="Ürün"
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium">Profesyonel Karbon Olta Kamışı</p>
                          <p className="text-sm text-muted-foreground">1 Adet × 1,299.00 TL</p>
                        </div>
                        <p className="font-semibold">1,299.00 TL</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src="/fishing-reel-set.jpg" alt="Ürün" className="h-16 w-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <p className="font-medium">Premium Makara Seti</p>
                          <p className="text-sm text-muted-foreground">1 Adet × 899.00 TL</p>
                        </div>
                        <p className="font-semibold">899.00 TL</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2 border-t pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ara Toplam</span>
                        <span>2,198.00 TL</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Kargo</span>
                        <span className="text-primary">Ücretsiz</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 text-lg font-bold">
                        <span>Toplam</span>
                        <span>2,198.00 TL</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Yardım */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Yardıma mı İhtiyacınız Var?</h2>
              <p className="mb-6 text-muted-foreground">
                Siparişinizle ilgili herhangi bir sorunuz varsa müşteri hizmetlerimizle iletişime geçebilirsiniz
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/iletisim">
                  <Button size="lg">İletişime Geç</Button>
                </Link>
                <Link href="/sss">
                  <Button variant="outline" size="lg">
                    SSS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
