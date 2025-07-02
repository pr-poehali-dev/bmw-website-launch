import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BMWHistory } from "@/components/BMWHistory";
import { ModelsShowcase } from "@/components/ModelsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BMWHistory />
      <ModelsShowcase />
    </div>
  );
};

export default Index;
