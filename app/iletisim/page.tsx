"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus("success")
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setSubmitStatus("idle")
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Atatürk Caddesi No: 123, Beşiktaş, İstanbul, Türkiye",
      link: null,
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 212 555 0123",
      link: "tel:+902125550123",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@balikavi.com",
      link: "mailto:info@balikavi.com",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cumartesi: 09:00 - 18:00",
      link: null,
    },
  ]

  const departments = [
    {
      name: "Satış Departmanı",
      email: "satis@balikavi.com",
      phone: "+90 212 555 0124",
    },
    {
      name: "Müşteri Hizmetleri",
      email: "destek@balikavi.com",
      phone: "+90 212 555 0125",
    },
    {
      name: "Teknik Destek",
      email: "teknik@balikavi.com",
      phone: "+90 212 555 0126",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/contact-hero-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">İletişim</Badge>
          <h1 className="mb-6 text-4xl font-bold text-white text-balance md:text-5xl">Bizimle İletişime Geçin</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 text-pretty leading-relaxed">
            Sorularınız, önerileriniz veya talepleriniz için bize ulaşın. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-11">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="py-6">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold">Mesaj Gönderin</h2>
                  <p className="text-muted-foreground">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Adınız Soyadınız <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Adınız ve soyadınız"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-posta <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Konu <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Mesajınızın konusu"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Mesajınız <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-950 dark:text-green-200">
                      <p className="font-semibold">Mesajınız başarıyla gönderildi!</p>
                      <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
                      <p className="font-semibold">Bir hata oluştu!</p>
                      <p className="text-sm">Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Gönderiliyor..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Mesajı Gönder
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-sm text-muted-foreground hover:text-primary">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Departments */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Departmanlar</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <p className="mb-2 font-semibold">{dept.name}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          <Mail className="mr-2 inline h-3 w-3" />
                          <a href={`mailto:${dept.email}`} className="hover:text-primary">
                            {dept.email}
                          </a>
                        </p>
                        <p>
                          <Phone className="mr-2 inline h-3 w-3" />
                          <a href={`tel:${dept.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                            {dept.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Canlı Destek</h3>
                <p className="mb-4 text-sm text-white/90 leading-relaxed">
                  Hızlı yanıt için canlı destek hattımızdan bize ulaşın.
                </p>
                <Button variant="secondary" className="w-full">
                  Canlı Sohbet Başlat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="h-[400px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9894243697363!2d29.00573931571828!3d41.04276627929659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sBe%C5%9Fikta%C5%9F%2C%20Istanbul!5e0!3m2!1sen!2str!4v1647854321234!5m2!1sen!2str"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BalıkAvı Konum"
              />
            </div>
          </Card>
        </div>

        {/* Customer Testimonials Section */}
        

        {/* Store Gallery Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-center text-2xl font-bold">Mağazamızdan Görüntüler</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="overflow-hidden">
              <img
                src="/store-interior-1.jpg"
                alt="Mağaza iç mekan"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="/store-products-display.jpg"
                alt="Ürün teşhiri"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="/store-fishing-rods.jpg"
                alt="Oltalar bölümü"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="/store-team-working.jpg"
                alt="Ekibimiz"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-center text-2xl font-bold">Sıkça Sorulan Sorular</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Kargo ne kadar sürer?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Siparişleriniz 1-3 iş günü içinde kargoya teslim edilir. Kargo süresi bölgenize göre 2-5 iş günü
                  arasında değişir.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">İade politikanız nedir?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ürünü teslim aldıktan sonra 15 gün içinde iade edebilirsiniz. Ürün kullanılmamış ve orijinal
                  ambalajında olmalıdır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Ürünler garantili mi?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tüm ürünlerimiz üretici firmanın verdiği garantiye sahiptir. Garanti süreleri ürüne göre değişiklik
                  gösterir.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Toptan satış yapıyor musunuz?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Evet, toptan satış için satış departmanımızla iletişime geçebilirsiniz. Özel fiyatlandırma ve koşullar
                  hakkında bilgi alabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
