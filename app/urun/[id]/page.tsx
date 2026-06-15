"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, ChevronRight, Star, Minus, Plus, Check } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { items: cartItems, addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data
  const product = {
    id: params.id,
    name: "Profesyonel Olta Kamışı Carbon Pro X",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    rating: 4.8,
    reviewCount: 156,
    badge: "Yeni",
    category: "Olta Kamışları",
    brand: "FishMaster",
    stock: 12,
    images: [
      "/professional-fishing-rod.jpg",
      "/fishing-rod-detail-1.jpg",
      "/fishing-rod-detail-2.jpg",
      "/fishing-rod-detail-3.jpg",
    ],
    description:
      "Carbon Pro X serisi profesyonel olta kamışı, yüksek kaliteli karbon fiber malzemeden üretilmiştir. Hafif yapısı ve güçlü performansıyla hem tatlı su hem de tuzlu su balıkçılığı için idealdir.",
    features: [
      "Yüksek modül karbon fiber yapı",
      "Ultra hafif tasarım (sadece 180g)",
      "Güçlendirilmiş kılavuz halkalar",
      "Ergonomik tutamak dizaynı",
      "2 yıl garanti",
      "Taşıma kılıfı dahil",
    ],
    specifications: {
      Uzunluk: "3.6 metre",
      Ağırlık: "180 gram",
      "Parça Sayısı": "3 parça",
      "Taşıma Boyu": "125 cm",
      Malzeme: "Karbon Fiber",
      "Test Eğrisi": "10-30 gram",
      "Kılavuz Halkalar": "Seramik kaplı",
      Renk: "Siyah/Kırmızı",
    },
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Makara Seti - Pro Series",
      price: 1899,
      image: "/fishing-reel-set.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Balık Yemleri Koleksiyonu",
      price: 349,
      image: "/fishing-lures-collection.jpg",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Su Geçirmez Balıkçı Çantası",
      price: 899,
      image: "/waterproof-fishing-bag.jpg",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Silikon Yem Seti 50 Parça",
      price: 449,
      image: "/silicone-lure-set.jpg",
      rating: 4.4,
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "Ahmet Yılmaz",
      rating: 5,
      date: "15 Ocak 2025",
      comment:
        "Mükemmel bir olta kamışı. Hem hafif hem de çok dayanıklı. Deniz balıkçılığında harika performans gösterdi.",
      helpful: 24,
    },
    {
      id: 2,
      author: "Mehmet Kaya",
      rating: 4,
      date: "10 Ocak 2025",
      comment: "Kaliteli bir ürün ancak fiyatı biraz yüksek. Yine de parasını hak ediyor diyebilirim.",
      helpful: 12,
    },
    {
      id: 3,
      author: "Zeynep Demir",
      rating: 5,
      date: "5 Ocak 2025",
      comment: "Eşime hediye aldım, çok beğendi. Hafif ve kullanımı kolay. Taşıma kılıfı da çok işlevsel.",
      helpful: 18,
    },
  ]

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + delta)))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/urunler" className="hover:text-primary">
              Ürünler
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/urunler" className="hover:text-primary">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              {product.badge && (
                <Badge className="absolute left-4 top-4 z-10 bg-accent text-accent-foreground">{product.badge}</Badge>
              )}
              {product.discount > 0 && (
                <Badge className="absolute right-4 top-4 z-10 bg-destructive text-destructive-foreground">
                  -{product.discount}%
                </Badge>
              )}
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="outline">{product.brand}</Badge>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-balance">{product.name}</h1>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <Link href="#reviews" className="text-sm text-muted-foreground hover:text-primary">
                  {product.reviewCount} Değerlendirme
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">{product.price.toLocaleString("tr-TR")} ₺</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString("tr-TR")} ₺
                  </span>
                )}
              </div>
              {product.stock > 0 ? (
                <p className="mt-2 text-sm text-green-600">Stokta {product.stock} adet mevcut</p>
              ) : (
                <p className="mt-2 text-sm text-destructive">Stokta yok</p>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="mb-3 font-semibold">Ürün Özellikleri</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="mr-4 font-semibold">Adet:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {(() => {
                  const productId = Number(params.id)
                  const inCart = cartItems.some((item) => item.id === productId)
                  return (
                    <Button
                      size="lg"
                      className="flex-1 gap-2"
                      variant={inCart ? "secondary" : "default"}
                      onClick={() =>
                        addItem(
                          {
                            id: productId,
                            name: product.name,
                            price: product.price,
                            image: product.images[0],
                            category: product.category,
                          },
                          quantity,
                        )
                      }
                    >
                      {inCart ? (
                        <>
                          <Check className="h-5 w-5" />
                          Sepete Eklendi
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-5 w-5" />
                          Sepete Ekle
                        </>
                      )}
                    </Button>
                  )
                })()}
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Shipping Info */}
            <div className="space-y-3 rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Ücretsiz Kargo</p>
                  <p className="text-sm text-muted-foreground">500 ₺ ve üzeri alışverişlerde</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Güvenli Alışveriş</p>
                  <p className="text-sm text-muted-foreground">256-bit SSL sertifikalı</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Kolay İade</p>
                  <p className="text-sm text-muted-foreground">15 gün içinde ücretsiz iade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b">
              <TabsTrigger value="description">Açıklama</TabsTrigger>
              <TabsTrigger value="specifications">Teknik Özellikler</TabsTrigger>
              <TabsTrigger value="reviews" id="reviews">
                Değerlendirmeler ({product.reviewCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="py-6">
              <div className="prose max-w-none">
                <p className="leading-relaxed text-muted-foreground">{product.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="py-6">
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-semibold">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="py-6">
              <div className="space-y-6">
                {/* Rating Summary */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="mb-2 text-5xl font-bold">{product.rating}</div>
                        <div className="mb-2 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-500 text-yellow-500"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{product.reviewCount} Değerlendirme</p>
                      </div>
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center gap-2">
                            <span className="w-12 text-sm">{star} yıldız</span>
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                              <div className="h-full bg-yellow-500" style={{ width: `${(star / 5) * 80}%` }} />
                            </div>
                            <span className="w-12 text-right text-sm text-muted-foreground">
                              {Math.floor((star / 5) * product.reviewCount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{review.author}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-500 text-yellow-500" : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mb-3 leading-relaxed text-muted-foreground">{review.comment}</p>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          Faydalı ({review.helpful})
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Benzer Ürünler</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link href={`/urun/${product.id}`} key={product.id}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-semibold text-balance leading-tight">{product.name}</h3>
                    <div className="mb-2 flex items-center gap-1">
                      <span className="text-sm text-yellow-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <p className="text-xl font-bold text-primary">{product.price.toLocaleString("tr-TR")} ₺</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
