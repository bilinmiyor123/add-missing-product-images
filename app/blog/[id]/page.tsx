import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, User, Clock, Facebook, Twitter, Mail, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Mock blog post data
  const post = {
    id: params.id,
    title: "2025 Yılının En İyi 10 Olta Kamışı",
    excerpt:
      "Bu yıl piyasaya çıkan en kaliteli ve performanslı olta kamışlarını inceledik. İşte karşınızda en iyi 10 seçim.",
    image: "/blog-featured-fishing-rods.jpg",
    category: "Ürün İncelemeleri",
    author: "Ahmet Yılmaz",
    date: "15 Ocak 2025",
    readTime: "8 dakika",
    content: `
      <p>Balıkçılık mevsiminin başlamasıyla birlikte, birçok balıkçı ekipmanlarını yenilemek veya tamamlamak istiyor. Özellikle olta kamışı seçimi, başarılı bir balıkçılık deneyiminin en önemli unsurlarından biri.</p>

      <p>Bu yazımızda, 2025 yılında piyasaya çıkan ve test ettiğimiz onlarca olta kamışı arasından en iyilerini sizler için derledik. Her bütçe ve ihtiyaca uygun seçenekler sunuyoruz.</p>

      <h2>1. Carbon Pro X - Profesyonel Seri</h2>
      <p>Karbon fiber yapısı ile hafif ve dayanıklı olan Carbon Pro X, profesyonel balıkçıların tercihi. 3.6 metre uzunluğu ve 180 gram ağırlığı ile uzun süreli kullanımlarda yorulmadan av yapmanızı sağlıyor.</p>

      <h3>Özellikler:</h3>
      <ul>
        <li>Yüksek modül karbon fiber yapı</li>
        <li>Ultra hafif tasarım (180g)</li>
        <li>Güçlendirilmiş kılavuz halkalar</li>
        <li>Ergonomik tutamak</li>
        <li>2 yıl garanti</li>
      </ul>

      <h2>2. SeaMaster Elite 4.2m</h2>
      <p>Deniz balıkçılığı için tasarlanmış bu model, güçlü yapısı ve esnekliği ile büyük balıkları yakalarken bile kontrol kaybetmemenizi sağlıyor.</p>

      <h2>Seçim Yaparken Dikkat Edilmesi Gerekenler</h2>
      <p>Olta kamışı seçerken şu faktörlere dikkat etmeniz gerekir:</p>
      <ul>
        <li>Kullanım amacı (tatlı su veya deniz)</li>
        <li>Uzunluk ve ağırlık</li>
        <li>Malzeme kalitesi</li>
        <li>Test eğrisi</li>
        <li>Bütçeniz</li>
      </ul>

      <h2>Sonuç</h2>
      <p>2025 yılı olta kamışı teknolojisi açısından çok heyecan verici gelişmelere sahne oluyor. Yukarıda listelediğimiz modeller, farklı bütçe ve ihtiyaçlar için en iyi seçenekler arasında yer alıyor.</p>

      <p>Hangi olta kamışını seçerseniz seçin, en önemli şey sizin için doğru olanı bulmak. Mağazamızda tüm bu ürünleri inceleyebilir ve uzman ekibimizden tavsiye alabilirsiniz.</p>
    `,
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Deniz Balıkçılığında Başarılı Olmanın 7 Altın Kuralı",
      image: "/blog-sea-fishing-tips.jpg",
      category: "Balıkçılık İpuçları",
    },
    {
      id: 3,
      title: "Makara Seçiminde Nelere Dikkat Edilmeli?",
      image: "/blog-fishing-reel-guide.jpg",
      category: "Ürün İncelemeleri",
    },
    {
      id: 4,
      title: "Kış Aylarında Balık Avı: Bilmeniz Gerekenler",
      image: "/blog-winter-fishing.jpg",
      category: "Balıkçılık İpuçları",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Back Button */}
      <div className="border-b bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Bloga Dön
            </Button>
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4" variant="outline">
              {post.category}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl">{post.title}</h1>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Paylaş:</span>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Mail className="h-4 w-4" />
                E-posta
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-[500px] w-full object-cover" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-12" />

          {/* Author Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{post.author}</h3>
                  <p className="text-sm text-muted-foreground">
                    Balıkçılık uzmanı ve içerik yazarı. 15 yıldır balıkçılık ekipmanları ve teknikleri hakkında yazıyor.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Posts */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold">İlgili Makaleler</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2" variant="outline">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold text-balance leading-tight group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
