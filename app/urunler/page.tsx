"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, SlidersHorizontal, ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function ProductsPage() {
  const { items: cartItems, addItem, removeItem } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])
  const productsPerPage = 8

  const products = [
    {
      id: 1,
      name: "Profesyonel Olta Kamışı",
      price: 2499,
      image: "/professional-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: "Yeni",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Makara Seti - Pro Series",
      price: 1899,
      image: "/fishing-reel-set.jpg",
      category: "Makaralar",
      badge: "Popüler",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Balık Yemleri Koleksiyonu",
      price: 349,
      image: "/fishing-lures-collection.jpg",
      category: "Yemler",
      badge: "İndirim",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Su Geçirmez Balıkçı Çantası",
      price: 899,
      image: "/waterproof-fishing-bag.jpg",
      category: "Aksesuar",
      badge: null,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Karbon Fiber Olta Kamışı 3.6m",
      price: 3299,
      image: "/carbon-fiber-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: "Premium",
      rating: 5.0,
    },
    {
      id: 6,
      name: "Elektrikli Makara",
      price: 4599,
      image: "/electric-fishing-reel.jpg",
      category: "Makaralar",
      badge: "Yeni",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Silikon Yem Seti 50 Parça",
      price: 449,
      image: "/silicone-lure-set.jpg",
      category: "Yemler",
      badge: null,
      rating: 4.4,
    },
    {
      id: 8,
      name: "Balıkçı Yelegi - Su Geçirmez",
      price: 1299,
      image: "/fishing-vest-waterproof.jpg",
      category: "Kıyafet",
      badge: "Popüler",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Teleskopik Olta Kamışı 2.4m",
      price: 999,
      image: "/telescopic-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: null,
      rating: 4.3,
    },
    {
      id: 10,
      name: "Havlu Takımı Profesyonel",
      price: 799,
      image: "/professional-fishing-net.jpg",
      category: "Aksesuar",
      badge: null,
      rating: 4.5,
    },
    {
      id: 11,
      name: "LED Işıklı Balık Detektörü",
      price: 2199,
      image: "/led-fish-detector.jpg",
      category: "Teknoloji",
      badge: "Yeni",
      rating: 4.6,
    },
    {
      id: 12,
      name: "Misina Seti Premium",
      price: 299,
      image: "/premium-fishing-line-set.jpg",
      category: "Yemler",
      badge: "İndirim",
      rating: 4.7,
    },
    {
      id: 13,
      name: "Spinning Olta Kamışı 2.7m",
      price: 1799,
      image: "/professional-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: "Popüler",
      rating: 4.6,
    },
    {
      id: 14,
      name: "Baitcast Makara Deluxe",
      price: 2899,
      image: "/fishing-reel-set.jpg",
      category: "Makaralar",
      badge: null,
      rating: 4.8,
    },
    {
      id: 15,
      name: "Wobbler Yem Seti 20 Parça",
      price: 599,
      image: "/fishing-lures-collection.jpg",
      category: "Yemler",
      badge: "Yeni",
      rating: 4.5,
    },
    {
      id: 16,
      name: "Termal Balıkçı Çantası XL",
      price: 1199,
      image: "/waterproof-fishing-bag.jpg",
      category: "Aksesuar",
      badge: null,
      rating: 4.4,
    },
    {
      id: 17,
      name: "Karbon Surf Kamışı 4.2m",
      price: 3899,
      image: "/carbon-fiber-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: "Premium",
      rating: 4.9,
    },
    {
      id: 18,
      name: "Otomatik Makara Pro",
      price: 3299,
      image: "/electric-fishing-reel.jpg",
      category: "Makaralar",
      badge: null,
      rating: 4.6,
    },
    {
      id: 19,
      name: "Silikon Solucan Yem Seti",
      price: 199,
      image: "/silicone-lure-set.jpg",
      category: "Yemler",
      badge: "İndirim",
      rating: 4.3,
    },
    {
      id: 20,
      name: "Su Geçirmez Yağmurluk",
      price: 1499,
      image: "/fishing-vest-waterproof.jpg",
      category: "Kıyafet",
      badge: "Yeni",
      rating: 4.7,
    },
    {
      id: 21,
      name: "Mini Teleskopik Kamış 1.8m",
      price: 749,
      image: "/telescopic-fishing-rod.jpg",
      category: "Olta Kamışları",
      badge: null,
      rating: 4.2,
    },
    {
      id: 22,
      name: "Profesyonel Kepçe Seti",
      price: 899,
      image: "/professional-fishing-net.jpg",
      category: "Aksesuar",
      badge: "Popüler",
      rating: 4.6,
    },
    {
      id: 23,
      name: "Sonar Balık Bulucu Pro",
      price: 3499,
      image: "/led-fish-detector.jpg",
      category: "Teknoloji",
      badge: "Premium",
      rating: 4.8,
    },
    {
      id: 24,
      name: "Fluorokarbon Misina Seti",
      price: 399,
      image: "/premium-fishing-line-set.jpg",
      category: "Yemler",
      badge: null,
      rating: 4.5,
    },
  ]

  const categories = ["Olta Kamışları", "Makaralar", "Yemler", "Aksesuar", "Kıyafet", "Teknoloji"]

  const priceRanges = [
    { label: "0 - 500 ₺", min: 0, max: 500 },
    { label: "500 - 1000 ₺", min: 500, max: 1000 },
    { label: "1000 - 2000 ₺", min: 1000, max: 2000 },
    { label: "2000 - 5000 ₺", min: 2000, max: 5000 },
    { label: "5000 ₺ ve üzeri", min: 5000, max: Number.POSITIVE_INFINITY },
  ]

  // Filtreleme: arama + kategori + fiyat + puan
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase().trim())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      priceRanges
        .filter((range) => selectedPriceRanges.includes(range.label))
        .some((range) => product.price >= range.min && product.price < range.max)

    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.some((minRating) => product.rating >= minRating)

    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  })

  // Sıralama
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / productsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const startIndex = (safePage - 1) * productsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleCategory = (category: string) => {
    setCurrentPage(1)
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const togglePriceRange = (label: string) => {
    setCurrentPage(1)
    setSelectedPriceRanges((prev) => (prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]))
  }

  const toggleRating = (rating: number) => {
    setCurrentPage(1)
    setSelectedRatings((prev) => (prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedRatings([])
    setSearchTerm("")
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-balance">Ürünlerimiz</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Profesyonel balıkçılık ekipmanlarının en geniş koleksiyonu
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ürün ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>

          <div className="flex gap-2 justify-center md:justify-start">
            {/* Filter Toggle Button */}
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filtreler
            </Button>

            {/* Sort Dropdown */}
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sırala" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">En Popüler</SelectItem>
                <SelectItem value="price-asc">Fiyat: Düşükten Yükseğe</SelectItem>
                <SelectItem value="price-desc">Fiyat: Yüksekten Düşüğe</SelectItem>
                <SelectItem value="rating">En Yüksek Puan</SelectItem>
                <SelectItem value="newest">En Yeni</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-20 space-y-6">
                {/* Categories Filter */}
                <div>
                  <h3 className="mb-4 font-semibold">Kategoriler</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={category} className="cursor-pointer text-sm font-normal">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="mb-4 font-semibold">Fiyat Aralığı</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.label} className="flex items-center gap-2">
                        <Checkbox
                          id={range.label}
                          checked={selectedPriceRanges.includes(range.label)}
                          onCheckedChange={() => togglePriceRange(range.label)}
                        />
                        <Label htmlFor={range.label} className="cursor-pointer text-sm font-normal">
                          {range.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="mb-4 font-semibold">Puan</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <Checkbox
                          id={`rating-${rating}`}
                          checked={selectedRatings.includes(rating)}
                          onCheckedChange={() => toggleRating(rating)}
                        />
                        <Label htmlFor={`rating-${rating}`} className="cursor-pointer text-sm font-normal">
                          {rating} Yıldız ve üzeri
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
                  Filtreleri Temizle
                </Button>
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              {sortedProducts.length > 0
                ? `Toplam ${sortedProducts.length} üründen ${startIndex + 1}-${Math.min(
                    startIndex + productsPerPage,
                    sortedProducts.length,
                  )} arası gösteriliyor`
                : "Sonuç bulunamadı"}
            </div>

            {sortedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20 text-center">
                <Search className="mb-4 h-10 w-10 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">Aramanızla eşleşen ürün bulunamadı</h3>
                <p className="mb-6 max-w-md text-sm text-muted-foreground text-pretty">
                  Arama teriminizi değiştirmeyi veya filtreleri temizlemeyi deneyin.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Filtreleri Temizle
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                <Link href={`/urun/${product.id}`} key={product.id}>
                  <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
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
                      <div className="mb-1 text-xs text-muted-foreground">{product.category}</div>
                      <h3 className="mb-2 font-semibold text-balance leading-tight">{product.name}</h3>
                      <div className="mb-2 flex items-center gap-1">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <p className="mb-3 text-xl font-bold text-primary">{product.price.toLocaleString("tr-TR")} ₺</p>
                      {(() => {
                        const inCart = cartItems.some((item) => item.id === product.id)
                        return (
                          <Button
                            className="w-full gap-2"
                            variant={inCart ? "secondary" : "default"}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              if (inCart) {
                                removeItem(product.id)
                              } else {
                                addItem({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                  category: product.category,
                                })
                              }
                            }}
                          >
                            {inCart ? (
                              <>
                                <Check className="h-4 w-4" />
                                Sepetten Çıkar
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="h-4 w-4" />
                                Sepete Ekle
                              </>
                            )}
                          </Button>
                        )
                      })()}
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button variant="outline" disabled={safePage === 1} onClick={() => goToPage(safePage - 1)}>
                  Önceki
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={safePage === page ? "default" : "outline"}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" disabled={safePage === totalPages} onClick={() => goToPage(safePage + 1)}>
                  Sonraki
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
