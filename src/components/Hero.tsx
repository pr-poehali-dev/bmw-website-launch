import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-bmw-dark-gray via-gray-900 to-bmw-blue flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-bmw-light-blue bg-clip-text text-transparent">
            BMW
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
            Немецкое качество и инновации с 1916 года
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Откройте для себя историю легендарной марки, от первых автомобилей
            до современных шедевров инженерной мысли
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-bmw-blue hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
            >
              <Icon name="Car" className="mr-2" size={20} />
              Узнать историю
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-bmw-dark-gray px-8 py-3 text-lg font-medium"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Новые модели
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
}
