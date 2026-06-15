import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="mx-auto h-12 w-64" />
          <Skeleton className="mx-auto mt-4 h-6 w-96" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
