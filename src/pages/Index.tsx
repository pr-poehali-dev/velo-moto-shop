import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import { categories, featuredProducts } from "@/data/homeData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <CategorySection categories={categories} />
        <FeaturedProductsSection products={featuredProducts} />
        <BenefitsSection />
        <SubscribeSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
