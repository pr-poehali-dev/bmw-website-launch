import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BMWHistory } from "@/components/BMWHistory";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BMWHistory />
    </div>
  );
};

export default Index;
