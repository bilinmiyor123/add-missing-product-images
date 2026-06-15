import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Clock, MapPin, Package, CheckCircle2, Shield, Phone } from "lucide-react"

export default function KargoBilgileriPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Truck className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="mb-4 text-4xl font-bold text-balance">Kargo Bilgileri</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Teslimat süreçleri, kargo firmaları ve kargo ücretleri hakkında detaylı bilgiler
              </p>
            </div>
          </div>
        </section>

        {/* Kargo Firmaları */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold">Kargo Firmaları</h2>
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Aras Kargo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Müşteri Hizmetleri:</p>
                    <p className="font-semibold text-foreground">444 25 52</p>
                    <a href="https://www.araskargo.com.tr" className="text-primary hover:underline">
                      www.araskargo.com.tr
                    </a>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Yurtiçi Kargo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Müşteri Hizmetleri:</p>
                    <p className="font-semibold text-foreground">444 99 99</p>
                    <a href="https://www.yurticikargo.com" className="text-primary hover:underline">
                      www.yurticikargo.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>MNG Kargo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Müşteri Hizmetleri:</p>
                    <p className="font-semibold text-foreground">444 06 06</p>
                    <a href="https://www.mngkargo.com.tr" className="text-primary hover:underline">
                      www.mngkargo.com.tr
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Kargo Ücretleri */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Kargo Ücretleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold">500 TL ve Üzeri</p>
                          <p className="text-sm text-muted-foreground">Tüm siparişlerde geçerli</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">Ücretsiz</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-3">
                        <Truck className="h-6 w-6 text-muted-foreground" />
                        <div>
                          <p className="font-semibold">500 TL Altı</p>
                          <p className="text-sm text-muted-foreground">Standart kargo ücreti</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">29.90 TL</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4 text-sm">
                      <Shield className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">İpucu:</span> Sepet tutarınızı 500 TL'ye
                        tamamlayarak ücretsiz kargo avantajından yararlanabilirsiniz.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Teslimat Süreleri */}
              <Card className="mb-12">
                <CardHeader>
                  <Clock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Teslimat Süreleri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold">Sipariş Hazırlama</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Siparişiniz onaylandıktan sonra 1-2 iş günü içinde paketlenir ve kargoya teslim edilir. Stokta
                      olmayan ürünler için hazırlama süresi daha uzun olabilir.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">Kargo Süresi</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Aynı İl İçi</span>
                        </div>
                        <span className="font-semibold">1 İş Günü</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Komşu İller</span>
                        </div>
                        <span className="font-semibold">1-2 İş Günü</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Uzak Bölgeler</span>
                        </div>
                        <span className="font-semibold">2-3 İş Günü</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">Toplam Teslimat Süresi</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sipariş hazırlama ve kargo süresi dahil ortalama{" "}
                      <span className="font-semibold text-foreground">2-5 iş günü</span> içinde siparişiniz elinizde
                      olacaktır. Hafta sonu ve resmi tatil günleri teslimat süresine dahil değildir.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Kargo Takibi */}
              <Card className="mb-12">
                <CardHeader>
                  <Package className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Kargo Takibi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Siparişiniz kargoya verildikten sonra size e-posta ve SMS ile kargo takip numarası gönderilir. Bu
                    numara ile kargonuzun konumunu anlık olarak takip edebilirsiniz.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Web Sitesi Üzerinden</p>
                        <p className="text-muted-foreground">
                          Hesabınıza giriş yaparak "Siparişlerim" bölümünden takip edebilirsiniz
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Kargo Firması Web Sitesi</p>
                        <p className="text-muted-foreground">
                          Takip numarası ile kargo firmasının web sitesinden takip edebilirsiniz
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Mobil Uygulamalar</p>
                        <p className="text-muted-foreground">
                          Kargo firmalarının mobil uygulamaları üzerinden takip edebilirsiniz
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/siparis-takibi">
                      <Button className="w-full" size="lg">
                        <Package className="mr-2 h-5 w-5" />
                        Siparişimi Takip Et
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Önemli Notlar */}
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Önemli Notlar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Tüm siparişler ücretsiz kargo sigortası ile gönderilir. Kargo sırasında oluşabilecek hasarlardan
                      firmamız sorumludur.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Kargonuz 3 kez adresinize uğrar. Teslim alınamazsa kargo şubesinde 10 gün bekletilir ve sonra geri
                      gönderilir.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Ürünü teslim alırken mutlaka kontrol ediniz. Hasarlı veya eksik teslimatları kargo görevlisine
                      tutanak tutturarak bildiriniz.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Yanlış veya eksik adres bilgisi teslimat süresini uzatabilir. Lütfen adres bilgilerinizi eksiksiz
                      ve doğru giriniz.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Acil durumlar ve kampanya dönemlerinde teslimat süreleri uzayabilir. Bu durumda tarafınıza
                      bilgilendirme yapılacaktır.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Phone className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-2xl font-bold">Kargo ile İlgili Sorunuz mu Var?</h2>
              <p className="mb-6 text-muted-foreground">
                Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/iletisim">
                  <Button size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Bize Ulaşın
                  </Button>
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
