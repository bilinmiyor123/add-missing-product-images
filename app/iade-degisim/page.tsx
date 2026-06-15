import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RefreshCw, Package, Clock, CheckCircle2, XCircle, AlertCircle, FileText } from "lucide-react"

export default function IadeDegisimPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <RefreshCw className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="mb-4 text-4xl font-bold text-balance">İade ve Değişim</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Ürün iade ve değişim işlemleriniz için detaylı bilgiler
              </p>
            </div>
          </div>
        </section>

        {/* İade Koşulları */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold">İade Koşulları</h2>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CheckCircle2 className="mb-2 h-8 w-8 text-green-600" />
                    <CardTitle>İade Edilebilir</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        <span>Ambalajı açılmamış ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        <span>Hasarsız ve kullanılmamış ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        <span>Etiketleri çıkarılmamış ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        <span>14 gün içinde iade talebi oluşturulan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <XCircle className="mb-2 h-8 w-8 text-red-600" />
                    <CardTitle>İade Edilemez</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                        <span>Kullanılmış veya hasar görmüş ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                        <span>Özel üretim ve kişiye özel ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                        <span>İndirimli ve outlet ürünler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                        <span>14 günlük süre geçmiş ürünler</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* İade Süreci */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">İade Süreci Nasıl İşler?</CardTitle>
                  <CardDescription>Adım adım iade işlemi nasıl gerçekleşir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        1
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">İade Talebi Oluşturun</h3>
                        <p className="text-sm text-muted-foreground">
                          Hesabınıza giriş yaparak "Siparişlerim" bölümünden iade etmek istediğiniz ürünü seçin ve iade
                          talebinde bulunun.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        2
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Onay Bekleyin</h3>
                        <p className="text-sm text-muted-foreground">
                          İade talebiniz 24 saat içinde incelenecek ve size e-posta ile bilgi verilecektir.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        3
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Ürünü Kargolayın</h3>
                        <p className="text-sm text-muted-foreground">
                          İade onayı aldıktan sonra ürünü orijinal ambalajında kargo ile gönderin. Kargo ücreti
                          tarafımızdan karşılanacaktır.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        4
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">İnceleme ve Onay</h3>
                        <p className="text-sm text-muted-foreground">
                          Ürün depomıza ulaştığında kontrol edilecek ve iade koşullarına uygunluğu değerlendirilecektir.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        5
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">İade Tamamlandı</h3>
                        <p className="text-sm text-muted-foreground">
                          Ürün onaylandıktan sonra 5-7 iş günü içinde ödeme iadeniz gerçekleştirilecektir.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Değişim Bilgileri */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Ürün Değişimi</CardTitle>
                  <CardDescription>Farklı beden, renk veya model için değişim yapabilirsiniz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <Package className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Aynı Ürün Farklı Özellik</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Satın aldığınız ürünün farklı bedeni, rengi veya modelini ücretsiz değiştirebilirsiniz. Değişim
                        talebi için iade sürecini takip edin.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Hızlı Değişim</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Değişim talebiniz onaylandıktan sonra yeni ürününüz 2-3 iş günü içinde kargoya verilir. İade
                        ettiğiniz ürün depoya ulaşmayı beklemenize gerek yoktur.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Fiyat Farkı</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Değiştirmek istediğiniz ürünün fiyatı daha yüksekse, fark tutarını ödemeniz gerekmektedir. Daha
                        düşükse fark iade edilir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Önemli Notlar */}
              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Önemli Notlar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>İade ve değişim hakkınız, ürünü teslim aldığınız tarihten itibaren 14 gün geçerlidir.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>Kargo ücreti tarafımızdan karşılanmaktadır. Herhangi bir ödeme yapmanıza gerek yoktur.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      İade ettiğiniz ürünlerin bedelleri, ürünlerimize ulaştıktan sonra 5-7 iş günü içinde hesabınıza
                      iade edilir.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      Kredi kartı ile yapılan ödemelerde iade tutarı aynı kredi kartına, havale/EFT ile yapılan
                      ödemelerde ise belirttiğiniz hesaba aktarılır.
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
              <h2 className="mb-4 text-2xl font-bold">İade İşlemi Başlatmak İster Misiniz?</h2>
              <p className="mb-6 text-muted-foreground">
                Hesabınıza giriş yaparak siparişlerinizi görüntüleyebilir ve iade talebinde bulunabilirsiniz
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/hesap">
                  <Button size="lg">Hesabıma Git</Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" size="lg">
                    Destek Al
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
