import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-bmw-blue rounded-full flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">
              BMW
            </span>
          </div>
          <span className="font-heading font-bold text-xl text-bmw-dark-gray">
            BMW
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-bmw-blue transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#history"
            className="text-gray-700 hover:text-bmw-blue transition-colors font-medium"
          >
            История BMW
          </a>
          <a
            href="#models"
            className="text-gray-700 hover:text-bmw-blue transition-colors font-medium"
          >
            Новые модели
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-bmw-blue transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <Button variant="outline" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
}
