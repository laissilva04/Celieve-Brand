import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhySection } from "@/components/why-section"
import { CollectionSection } from "@/components/collection-section"
import { QuoteSection } from "@/components/quote-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#012809]">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <CollectionSection />
      <QuoteSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
