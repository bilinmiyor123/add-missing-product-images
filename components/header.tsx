import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Search } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">
            <span className="text-primary">Balık</span>
            <span className="text-accent">Avı</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Ana Sayfa
          </Link>
          <Link href="/urunler" className="text-sm font-medium transition-colors hover:text-primary">
            Ürünler
          </Link>
          <Link href="/hakkimizda" className="text-sm font-medium transition-colors hover:text-primary">
            Hakkımızda
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/iletisim" className="text-sm font-medium transition-colors hover:text-primary">
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/hesap">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/sepet">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
