import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Lock,
  LogOut,
  Edit,
  Check,
  Clock,
  Truck,
  ChevronRight,
} from "lucide-react"

export default function HesapPage() {
  const orders = [
    {
      id: "ORD-2024-1234",
      date: "15 Mart 2024",
      status: "Teslim Edildi",
      total: "₺2.450,00",
      items: 3,
      statusColor: "success",
    },
    {
      id: "ORD-2024-1235",
      date: "20 Mart 2024",
      status: "Kargoda",
      total: "₺1.890,00",
      items: 2,
      statusColor: "warning",
    },
    {
      id: "ORD-2024-1236",
      date: "25 Mart 2024",
      status: "Hazırlanıyor",
      total: "₺850,00",
      items: 1,
      statusColor: "info",
    },
  ]

  const favorites = [
    {
      id: 1,
      name: "Profesyonel Olta Seti",
      price: "₺2.499,00",
      image: "/professional-fishing-rod.jpg",
      stock: true,
    },
    {
      id: 2,
      name: "Premium Makaralı Set",
      price: "₺1.899,00",
      image: "/fishing-reel-set.jpg",
      stock: true,
    },
    {
      id: 3,
      name: "Yem Koleksiyonu",
      price: "₺450,00",
      image: "/fishing-lures-collection.jpg",
      stock: false,
    },
  ]

  const addresses = [
    {
      id: 1,
      title: "Ev Adresi",
      name: "Ahmet Yılmaz",
      address: "Atatürk Cad. No: 123/5 Kadıköy",
      city: "İstanbul",
      phone: "+90 555 123 4567",
      default: true,
    },
    {
      id: 2,
      title: "İş Adresi",
      name: "Ahmet Yılmaz",
      address: "Cumhuriyet Mah. İş Merkezi Kat: 3",
      city: "İstanbul",
      phone: "+90 555 123 4567",
      default: false,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-2xl font-bold">AY</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                  Hoş Geldiniz, Ahmet Yılmaz
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">ahmet.yilmaz@example.com</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Package className="mr-1 h-3 w-3" />
                    15 Sipariş
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Heart className="mr-1 h-3 w-3" />8 Favori
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Üye: Ocak 2023
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="lg">
                <Edit className="mr-2 h-4 w-4" />
                Profili Düzenle
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="siparisler" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-6">
                <TabsTrigger value="siparisler" className="gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">Siparişlerim</span>
                </TabsTrigger>
                <TabsTrigger value="favoriler" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Favoriler</span>
                </TabsTrigger>
                <TabsTrigger value="adresler" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Adreslerim</span>
                </TabsTrigger>
                <TabsTrigger value="hesap" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Hesap</span>
                </TabsTrigger>
                <TabsTrigger value="odemeler" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Ödemeler</span>
                </TabsTrigger>
                <TabsTrigger value="guvenlik" className="gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="hidden sm:inline">Güvenlik</span>
                </TabsTrigger>
              </TabsList>

              {/* Siparişlerim Tab */}
              <TabsContent value="siparisler" className="mt-6">
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Siparişlerim</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <Card key={order.id} className="p-4 transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold">{order.id}</h3>
                              <Badge
                                variant={
                                  order.statusColor === "success"
                                    ? "default"
                                    : order.statusColor === "warning"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {order.status}
                              </Badge>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {order.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Package className="h-4 w-4" />
                                {order.items} Ürün
                              </span>
                              <span className="font-semibold text-foreground">{order.total}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline">
                              Detaylar
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                            {order.status === "Kargoda" && (
                              <Button>
                                <Truck className="mr-2 h-4 w-4" />
                                Takip Et
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Favoriler Tab */}
              <TabsContent value="favoriler" className="mt-6">
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Favori Ürünlerim</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((product) => (
                      <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="aspect-square overflow-hidden bg-muted">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="mt-2 text-lg font-bold text-primary">{product.price}</p>
                          {product.stock ? (
                            <Badge variant="outline" className="mt-2">
                              <Check className="mr-1 h-3 w-3" />
                              Stokta Var
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="mt-2">
                              Stokta Yok
                            </Badge>
                          )}
                          <div className="mt-4 flex gap-2">
                            <Button className="flex-1">Sepete Ekle</Button>
                            <Button variant="outline" size="icon">
                              <Heart className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Adreslerim Tab */}
              <TabsContent value="adresler" className="mt-6">
                <Card className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Adreslerim</h2>
                    <Button>
                      <MapPin className="mr-2 h-4 w-4" />
                      Yeni Adres Ekle
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {addresses.map((address) => (
                      <Card key={address.id} className="p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="font-semibold">{address.title}</h3>
                          {address.default && <Badge variant="default">Varsayılan</Badge>}
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p className="font-medium text-foreground">{address.name}</p>
                          <p>{address.address}</p>
                          <p>{address.city}</p>
                          <p>{address.phone}</p>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Edit className="mr-1 h-3 w-3" />
                            Düzenle
                          </Button>
                          {!address.default && (
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              Varsayılan Yap
                            </Button>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Hesap Bilgileri Tab */}
              <TabsContent value="hesap" className="mt-6">
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Hesap Bilgilerim</h2>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Ad</Label>
                        <Input id="firstName" defaultValue="Ahmet" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Soyad</Label>
                        <Input id="lastName" defaultValue="Yılmaz" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" defaultValue="ahmet.yilmaz@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" defaultValue="+90 555 123 4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Doğum Tarihi</Label>
                      <Input id="birthdate" type="date" defaultValue="1990-01-15" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <h3 className="font-semibold">Bildirimler</h3>
                        <p className="text-sm text-muted-foreground">Kampanyalar ve yenilikler hakkında e-posta alın</p>
                      </div>
                      <Button variant="outline">
                        <Bell className="mr-2 h-4 w-4" />
                        Yönet
                      </Button>
                    </div>
                    <div className="flex gap-4">
                      <Button className="flex-1">Değişiklikleri Kaydet</Button>
                      <Button variant="outline">İptal</Button>
                    </div>
                  </form>
                </Card>
              </TabsContent>

              {/* Ödeme Yöntemleri Tab */}
              <TabsContent value="odemeler" className="mt-6">
                <Card className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Kayıtlı Kartlarım</h2>
                    <Button>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Yeni Kart Ekle
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
                      <div className="flex items-center justify-between">
                        <CreditCard className="h-8 w-8" />
                        <Badge className="bg-background/20">Varsayılan</Badge>
                      </div>
                      <div className="mt-6 space-y-2">
                        <p className="text-sm opacity-80">Kart Numarası</p>
                        <p className="text-xl font-mono">•••• •••• •••• 4242</p>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <p className="text-sm opacity-80">Kart Sahibi</p>
                          <p className="font-semibold">AHMET YILMAZ</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm opacity-80">Son Kullanma</p>
                          <p className="font-semibold">12/26</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="border-2 border-dashed p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <CreditCard className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Yeni Kart Ekle</h3>
                          <p className="text-sm text-muted-foreground">Hızlı ödeme için kartınızı kaydedin</p>
                        </div>
                        <Button variant="outline">Ekle</Button>
                      </div>
                    </Card>
                  </div>
                </Card>
              </TabsContent>

              {/* Güvenlik Tab */}
              <TabsContent value="guvenlik" className="mt-6">
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Güvenlik Ayarları</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-semibold">Şifre Değiştir</h3>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Mevcut Şifre</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">Yeni Şifre</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                        <Button>Şifreyi Güncelle</Button>
                      </form>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <h3 className="font-semibold">İki Faktörlü Kimlik Doğrulama</h3>
                          <p className="text-sm text-muted-foreground">Hesabınız için ekstra güvenlik katmanı</p>
                        </div>
                        <Button variant="outline">Aktifleştir</Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <h3 className="font-semibold">Oturum Geçmişi</h3>
                          <p className="text-sm text-muted-foreground">Son 30 gün içindeki giriş aktiviteleriniz</p>
                        </div>
                        <Button variant="outline">Görüntüle</Button>
                      </div>
                    </div>
                    <Separator />
                    <Button variant="destructive" className="w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      Hesaptan Çıkış Yap
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
