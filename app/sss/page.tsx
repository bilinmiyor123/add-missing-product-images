import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle, Package, CreditCard, RefreshCw, Phone } from "lucide-react"

export default function SSS() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <HelpCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="mb-4 text-4xl font-bold text-balance">Sıkça Sorulan Sorular</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Merak ettiğiniz soruların cevaplarını bulabilirsiniz
              </p>
            </div>
          </div>
        </section>

        {/* Kategori Kartları */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <Card className="flex flex-col items-center gap-3 p-6 text-center transition-colors hover:bg-muted/50">
                <Package className="h-10 w-10 text-primary" />
                <h3 className="font-semibold">Sipariş & Teslimat</h3>
                <p className="text-sm text-muted-foreground">12 Soru</p>
              </Card>
              <Card className="flex flex-col items-center gap-3 p-6 text-center transition-colors hover:bg-muted/50">
                <CreditCard className="h-10 w-10 text-primary" />
                <h3 className="font-semibold">Ödeme Yöntemleri</h3>
                <p className="text-sm text-muted-foreground">8 Soru</p>
              </Card>
              <Card className="flex flex-col items-center gap-3 p-6 text-center transition-colors hover:bg-muted/50">
                <RefreshCw className="h-10 w-10 text-primary" />
                <h3 className="font-semibold">İade & Değişim</h3>
                <p className="text-sm text-muted-foreground">10 Soru</p>
              </Card>
            </div>

            {/* SSS Accordion */}
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold">Sipariş & Teslimat</h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Siparişimi nasıl takip edebilirim?</AccordionTrigger>
                  <AccordionContent>
                    Siparişinizi takip etmek için "Sipariş Takibi" sayfasından sipariş numaranızı ve e-posta adresinizi
                    girerek sorgulama yapabilirsiniz. Ayrıca hesabınıza giriş yaparak "Siparişlerim" bölümünden de takip
                    edebilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Teslimat süresi ne kadar?</AccordionTrigger>
                  <AccordionContent>
                    Siparişiniz onaylandıktan sonra 1-2 iş günü içinde kargoya teslim edilir. Kargo teslimat süresi
                    bölgenize göre 1-3 iş günü arasında değişmektedir. Toplamda 2-5 iş günü içinde siparişinizi teslim
                    alabilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Kargo ücreti ne kadar?</AccordionTrigger>
                  <AccordionContent>
                    500 TL ve üzeri alışverişlerinizde kargo ücretsizdir. 500 TL altındaki siparişlerde kargo ücreti
                    29.90 TL'dir. Bazı kampanya dönemlerinde kargo bedava olabilir, güncel kampanyaları takip etmenizi
                    öneririz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Hangi kargo firmalarıyla çalışıyorsunuz?</AccordionTrigger>
                  <AccordionContent>
                    Aras Kargo, Yurtiçi Kargo ve MNG Kargo ile çalışmaktayız. Kargo firması seçimi siparişinizin
                    hazırlandığı bölgeye göre otomatik olarak belirlenir. Kargo takip numaranız e-posta ve SMS ile
                    tarafınıza iletilir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Yurtdışına gönderim yapıyor musunuz?</AccordionTrigger>
                  <AccordionContent>
                    Şu anda sadece Türkiye içi gönderim yapmaktayız. Yurtdışı gönderim için çalışmalarımız devam
                    etmektedir. Yurtdışı gönderim başladığında web sitemizden ve sosyal medya hesaplarımızdan duyuru
                    yapılacaktır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Siparişimi iptal edebilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Siparişiniz kargoya verilmeden önce iptal edebilirsiniz. Bunun için müşteri hizmetlerimizle
                    iletişime geçmeniz yeterlidir. Sipariş kargoya verildikten sonra iptal işlemi yapılamaz, ancak ürünü
                    teslim aldıktan sonra iade edebilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="mb-8 text-2xl font-bold">Ödeme Yöntemleri</h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="payment-1">
                  <AccordionTrigger>Hangi ödeme yöntemlerini kabul ediyorsunuz?</AccordionTrigger>
                  <AccordionContent>
                    Kredi kartı (Visa, Mastercard, American Express), banka kartı, havale/EFT ve kapıda ödeme
                    seçeneklerini sunmaktayız. Tüm kredi kartlarında taksit imkanı mevcuttur.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-2">
                  <AccordionTrigger>Taksit yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, kredi kartınıza ve alışveriş tutarına göre 2-12 aya kadar taksit imkanı sunmaktayız. Taksit
                    seçenekleri ödeme sayfasında görüntülenir. Bazı bankalarla özel taksit kampanyalarımız
                    bulunmaktadır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-3">
                  <AccordionTrigger>Ödeme bilgilerim güvende mi?</AccordionTrigger>
                  <AccordionContent>
                    Kesinlikle. Tüm ödeme işlemlerimiz 256-bit SSL sertifikası ile şifrelenmektedir. Kredi kartı
                    bilgileriniz bizim sunucularımızda saklanmaz, doğrudan banka sistemlerine iletilir. PCI-DSS
                    standartlarına uygun çalışmaktayız.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-4">
                  <AccordionTrigger>Kapıda ödeme yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, 1000 TL'ye kadar olan siparişlerde kapıda ödeme seçeneğini kullanabilirsiniz. Kapıda nakit
                    veya kredi kartı ile ödeme yapabilirsiniz. 1000 TL üzeri siparişlerde online ödeme zorunludur.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="mb-8 text-2xl font-bold">İade & Değişim</h2>
              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="return-1">
                  <AccordionTrigger>İade süresi ne kadar?</AccordionTrigger>
                  <AccordionContent>
                    Ürünü teslim aldığınız tarihten itibaren 14 gün içinde ücretsiz iade hakkınız bulunmaktadır. İade
                    etmek istediğiniz ürünü kullanılmamış ve orijinal ambalajında göndermeniz gerekmektedir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-2">
                  <AccordionTrigger>İade kargo ücreti kim tarafından ödeniyor?</AccordionTrigger>
                  <AccordionContent>
                    İade kargo ücreti tarafımızca karşılanmaktadır. İade talebi oluşturduğunuzda size ücretsiz kargo
                    kodu gönderilecektir. Bu kodu kullanarak ürününüzü ücretsiz bir şekilde iade edebilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-3">
                  <AccordionTrigger>İade param ne zaman iade edilir?</AccordionTrigger>
                  <AccordionContent>
                    İade ettiğiniz ürün depomıza ulaştıktan ve kontrol edildikten sonra 5-7 iş günü içinde ödeme iadeniz
                    gerçekleştirilir. Kredi kartı ödemelerinde iade bankaya yapılır ve kartınıza yansıma süresi
                    bankanıza göre değişir (1-2 hafta).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-4">
                  <AccordionTrigger>Ürün değişimi yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, aynı ürünün farklı bedeni, rengi veya modelini istiyorsanız ücretsiz değişim yapabilirsiniz.
                    Değişim talebi için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir. Yeni ürününüz 2-3 iş günü
                    içinde kargoya verilir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="mb-8 text-2xl font-bold">Hesap & Üyelik</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="account-1">
                  <AccordionTrigger>Üye olmadan alışveriş yapabilir miyim?</AccordionTrigger>
                  <AccordionContent>
                    Evet, misafir kullanıcı olarak da alışveriş yapabilirsiniz. Ancak üye olduğunuzda sipariş takibi,
                    favori ürünler, kayıtlı adresler ve hızlı alışveriş gibi avantajlardan yararlanabilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-2">
                  <AccordionTrigger>Şifremi unuttum, ne yapmalıyım?</AccordionTrigger>
                  <AccordionContent>
                    Giriş sayfasındaki "Şifremi Unuttum" bağlantısına tıklayarak e-posta adresinizi girmeniz yeterlidir.
                    Size şifre sıfırlama linki gönderilecektir. Bu link ile yeni şifrenizi oluşturabilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-3">
                  <AccordionTrigger>Hesabımı nasıl silebilirim?</AccordionTrigger>
                  <AccordionContent>
                    Hesabınızı silmek için müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir. KVKK kapsamında tüm
                    bilgileriniz güvenli bir şekilde silinecektir. Hesap silme işlemi geri alınamaz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Yardım CTA */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Phone className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-2xl font-bold">Cevap Bulamadınız mı?</h2>
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
                <Button variant="outline" size="lg">
                  Canlı Destek
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
