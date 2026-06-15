import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">BalıkAvı</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Profesyonel balıkçılık ekipmanları ve av malzemeleri için güvenilir adresiniz.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/urunler" className="text-muted-foreground hover:text-primary transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Müşteri Hizmetleri</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/siparis-takibi" className="text-muted-foreground hover:text-primary transition-colors">
                  Sipariş Takibi
                </Link>
              </li>
              <li>
                <Link href="/iade-degisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İade ve Değişim
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-muted-foreground hover:text-primary transition-colors">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/kargo-bilgileri" className="text-muted-foreground hover:text-primary transition-colors">
                  Kargo Bilgileri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Bizi Takip Edin</h4>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">&copy; 2025 BalıkAvı Balıkçılık ve Av Malzemeleri A.Ş. Tüm hakları saklıdır.</p>
          <p className="text-xs">
            Bu sitede yer alan tüm içerik, görseller ve ürün bilgileri BalıkAvı'ya aittir ve izinsiz kullanılamaz.
            Gizlilik politikamız ve kullanım koşullarımız çerçevesinde hizmet vermekteyiz.
          </p>
        </div>
      </div>
    </footer>
  )
}
