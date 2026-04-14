import Hero from "@/components/Hero";
import BentoFeatures from "@/components/BentoFeatures";
import ProductsPackshot from "@/components/ProductsPackshot";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="main-layout">
      <Hero />
      <BentoFeatures />
      <ProductsPackshot />
      <FAQ />
      <CTA />
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Rilix. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
