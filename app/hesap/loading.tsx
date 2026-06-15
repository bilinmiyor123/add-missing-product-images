import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function HesapLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="mt-2 h-6 w-48" />
                <div className="mt-4 flex gap-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Skeleton className="h-12 w-full" />
            <div className="mt-6 space-y-4">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
