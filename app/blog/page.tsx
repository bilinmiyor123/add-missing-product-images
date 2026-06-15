"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  const categories = ["Tümü", "Balıkçılık İpuçları", "Ürün İncelemeleri", "Teknikler", "Lokasyonlar", "Ekipman Bakımı"]

  const featuredPost = {
    id: 1,
    title: "2025 Yılının En İyi 10 Olta Kamışı",
    excerpt:
      "Bu yıl piyasaya çıkan en kaliteli ve performanslı olta kamışlarını inceledik. İşte karşınızda en iyi 10 seçim.",
    image: "/blog-featured-fishing-rods.jpg",
    category: "Ürün İncelemeleri",
    author: "Ahmet Yılmaz",
    date: "15 Ocak 2025",
    readTime: "8 dakika",
  }

  const posts = [
    {
      id: 2,
      title: "Deniz Balıkçılığında Başarılı Olmanın 7 Altın Kuralı",
      excerpt: "Denizde başarılı bir balıkçılık deneyimi için mutlaka bilmeniz gereken ipuçları ve teknikler.",
      image: "/blog-sea-fishing-tips.jpg",
      category: "Balıkçılık İpuçları",
      author: "Mehmet Kaya",
      date: "12 Ocak 2025",
      readTime: "6 dakika",
    },
    {
      id: 3,
      title: "Makara Seçiminde Nelere Dikkat Edilmeli?",
      excerpt: "Doğru makara seçimi balıkçılık deneyiminizi doğrudan etkiler. İşte dikkat etmeniz gerekenler.",
      image: "/blog-fishing-reel-guide.jpg",
      category: "Ürün İncelemeleri",
      author: "Ayşe Demir",
      date: "10 Ocak 2025",
      readTime: "5 dakika",
    },
    {
      id: 4,
      title: "Kış Aylarında Balık Avı: Bilmeniz Gerekenler",
      excerpt: "Kış mevsiminde balık avı yaparken dikkat etmeniz gereken önemli noktalar ve ipuçları.",
      image: "/blog-winter-fishing.jpg",
      category: "Balıkçılık İpuçları",
      author: "Fatma Şahin",
      date: "8 Ocak 2025",
      readTime: "7 dakika",
    },
    {
      id: 5,
      title: "İstanbul'un En İyi Balık Avı Noktaları",
      excerpt: "İstanbul ve çevresinde balık avı için en verimli lokasyonları sizler için derledik.",
      image: "/blog-istanbul-fishing-spots.jpg",
      category: "Lokasyonlar",
      author: "Ali Yıldız",
      date: "5 Ocak 2025",
      readTime: "10 dakika",
    },
    {
      id: 6,
      title: "Olta Kamışı Bakımı: Uzun Ömürlü Kullanım İçin",
      excerpt: "Olta kamışınızın uzun yıllar boyunca verimli çalışması için bakım ve temizlik önerileri.",
      image: "/blog-rod-maintenance.jpg",
      category: "Ekipman Bakımı",
      author: "Zeynep Aydın",
      date: "3 Ocak 2025",
      readTime: "4 dakika",
    },
    {
      id: 7,
      title: "Jigging Tekniği ile Balık Avı Rehberi",
      excerpt: "Jigging tekniğinin incelikleri ve bu yöntemle nasıl daha başarılı olabileceğiniz.",
      image: "/blog-jigging-technique.jpg",
      category: "Teknikler",
      author: "Murat Özdemir",
      date: "1 Ocak 2025",
      readTime: "9 dakika",
    },
    {
      id: 8,
      title: "Yeni Başlayanlar İçin Balıkçılık Ekipmanları",
      excerpt: "Balıkçılığa yeni başlayanlar için olmazsa olmaz ekipmanlar ve öneriler.",
      image: "/blog-beginner-equipment.jpg",
      category: "Ürün İncelemeleri",
      author: "Can Arslan",
      date: "28 Aralık 2024",
      readTime: "6 dakika",
    },
    {
      id: 9,
      title: "Misina Seçimi: Monofilament vs Örgü",
      excerpt: "Monofilament ve örgü misina arasındaki farklar ve hangisinin size uygun olduğu.",
      image: "/blog-fishing-line-types.jpg",
      category: "Ürün İncelemeleri",
      author: "Ahmet Yılmaz",
      date: "25 Aralık 2024",
      readTime: "5 dakika",
    },
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "Tümü" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-balance">Blog & Makaleler</h1>
          <p className="text-lg text-muted-foreground text-pretty">Balıkçılık hakkında bilmeniz gereken her şey</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <div className="mb-12">
          <Link href={`/blog/${featuredPost.id}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-64 overflow-hidden md:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">Öne Çıkan</Badge>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <Badge className="mb-3 w-fit" variant="outline">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="mb-4 text-3xl font-bold text-balance group-hover:text-primary">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="mt-6 w-fit gap-2" variant="default">
                    Devamını Oku
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Makale ara..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="outline">
                    {post.category}
                  </Badge>
                  <h3 className="mb-3 text-xl font-bold text-balance leading-tight group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <Button variant="outline" disabled>
            Önceki
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Sonraki</Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
            <CardContent className="p-8 text-center text-white lg:p-12">
              <h2 className="mb-4 text-3xl font-bold text-balance">Blog Bültenimize Abone Olun</h2>
              <p className="mb-8 text-lg text-white/90 text-pretty">
                En yeni makaleler, balıkçılık ipuçları ve özel içerikler e-posta kutunuza gelsin
              </p>
              <div className="mx-auto flex max-w-md gap-2">
                <Input type="email" placeholder="E-posta adresiniz" className="bg-white text-foreground" />
                <Button variant="secondary" size="lg">
                  Abone Ol
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
