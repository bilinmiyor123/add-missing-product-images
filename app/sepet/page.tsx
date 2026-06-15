"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag, Truck } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Profesyonel Olta Kamışı Carbon Pro X",
      price: 2499,
      quantity: 1,
      image: "/professional-fishing-rod.jpg",
      category: "Olta Kamışları",
    },
    {
      id: 2,
      name: "Makara Seti - Pro Series",
      price: 1899,
      quantity: 2,
      image: "/fishing-reel-set.jpg",
      category: "Makaralar",
    },
    {
      id: 3,
      name: "Balık Yemleri Koleksiyonu",
      price: 349,
      quantity: 1,
      image: "/fishing-lures-collection.jpg",
      category: "Yemler",
    },
  ])

  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null)

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "indirim10") {
      setAppliedCoupon({ code: couponCode, discount: 10 })
    } else if (couponCode) {
      alert("Geçersiz kupon kodu")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 500 ? 0 : 50
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0
  const total = subtotal + shipping - discount

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <ShoppingBag className="h-24 w-24 text-muted-foreground" />
            </div>
            <h1 className="mb-4 text-2xl font-bold">Sepetiniz Boş</h1>
            <p className="mb-8 text-muted-foreground">
              Sepetinizde henüz ürün bulunmuyor. Alışverişe başlamak için ürünlerimize göz atın.
            </p>
            <Link href="/urunler">
              <Button size="lg" className="gap-2">
                Alışverişe Başla
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-2 text-4xl font-bold">Alışveriş Sepeti</h1>
          <p className="text-muted-foreground">Sepetinizde {cartItems.length} ürün bulunuyor</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Ürünler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link href={`/urun/${item.id}`} className="shrink-0">
                        <div className="h-24 w-24 overflow-hidden rounded-lg bg-muted">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform hover:scale-110"
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link href={`/urun/${item.id}`} className="font-semibold hover:text-primary">
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-4">
                            <p className="text-lg font-bold text-primary">
                              {(item.price * item.quantity).toLocaleString("tr-TR")} ₺
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {item.id !== cartItems[cartItems.length - 1].id && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="mt-4">
              <Link href="/urunler">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  Alışverişe Devam Et
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Sipariş Özeti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coupon Code */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <Tag className="h-4 w-4" />
                    <span>İndirim Kuponu</span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Kupon kodunu girin"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={appliedCoupon !== null}
                    />
                    <Button variant="outline" onClick={applyCoupon} disabled={appliedCoupon !== null || !couponCode}>
                      Uygula
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <p className="mt-2 text-sm text-green-600">
                      ✓ {appliedCoupon.code} kuponu uygulandı ({appliedCoupon.discount}% indirim)
                    </p>
                  )}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ara Toplam</span>
                    <span className="font-semibold">{subtotal.toLocaleString("tr-TR")} ₺</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kargo</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">Ücretsiz</span>
                      ) : (
                        `${shipping.toLocaleString("tr-TR")} ₺`
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">İndirim</span>
                      <span className="font-semibold text-green-600">-{discount.toLocaleString("tr-TR")} ₺</span>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Toplam</span>
                  <span className="font-bold text-primary">{total.toLocaleString("tr-TR")} ₺</span>
                </div>

                {/* Free Shipping Notice */}
                {shipping > 0 && (
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      <Truck className="mb-1 mr-1 inline h-4 w-4" />
                      {(500 - subtotal).toLocaleString("tr-TR")} ₺ daha alışveriş yapın, ücretsiz kargo kazanın!
                    </p>
                  </div>
                )}

                {/* Checkout Button */}
                <Button size="lg" className="w-full gap-2">
                  Ödemeye Geç
                  <ArrowRight className="h-5 w-5" />
                </Button>

                {/* Security Info */}
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Güvenli ödeme
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    15 gün içinde ücretsiz iade
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Taksit seçenekleri mevcut
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Bunlar da İlginizi Çekebilir</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                id: 5,
                name: "Karbon Fiber Olta Kamışı 3.6m",
                price: 3299,
                image: "/carbon-fiber-fishing-rod.jpg",
                rating: 5.0,
              },
              {
                id: 6,
                name: "Elektrikli Makara",
                price: 4599,
                image: "/electric-fishing-reel.jpg",
                rating: 4.7,
              },
              {
                id: 7,
                name: "Silikon Yem Seti 50 Parça",
                price: 449,
                image: "/silicone-lure-set.jpg",
                rating: 4.4,
              },
              {
                id: 10,
                name: "Havlu Takımı Profesyonel",
                price: 799,
                image: "/professional-fishing-net.jpg",
                rating: 4.5,
              },
            ].map((product) => (
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
