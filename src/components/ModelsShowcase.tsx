import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const newModels = [
  {
    name: "BMW iX",
    year: "2024",
    type: "Электрический SUV",
    power: "523 л.с.",
    range: "630 км",
    acceleration: "4.6 сек",
    price: "от 5 990 000 ₽",
    features: ["xDrive", "Автопилот", "Панорамная крыша"],
    isNew: true,
  },
  {
    name: "BMW M3 Competition",
    year: "2024",
    type: "Спортивный седан",
    power: "510 л.с.",
    range: "580 км",
    acceleration: "3.9 сек",
    price: "от 7 200 000 ₽",
    features: ["M xDrive", "Carbon", "Brembo тормоза"],
    isNew: false,
  },
  {
    name: "BMW X7",
    year: "2024",
    type: "Премиум SUV",
    power: "400 л.с.",
    range: "650 км",
    acceleration: "5.8 сек",
    price: "от 6 500 000 ₽",
    features: ["7 мест", "Пневмоподвеска", "Massage"],
    isNew: false,
  },
];

export function ModelsShowcase() {
  return (
    <section
      id="models"
      className="py-20 bg-gradient-to-b from-bmw-light-blue/20 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-bmw-dark-gray mb-6">
            Новые модели BMW
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Откройте для себя последние достижения BMW: от электрических
            инноваций до спортивных легенд
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newModels.map((model, index) => (
            <Card
              key={model.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-bmw-blue overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-bmw-dark-gray to-gray-800 text-white relative">
                {model.isNew && (
                  <Badge className="absolute top-4 right-4 bg-bmw-blue hover:bg-bmw-blue text-white">
                    НОВИНКА
                  </Badge>
                )}
                <div className="h-32 bg-gradient-to-r from-bmw-blue/20 to-bmw-light-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Car" className="text-white/80" size={48} />
                </div>
                <CardTitle className="font-heading text-2xl">
                  {model.name}
                </CardTitle>
                <p className="text-gray-300">
                  {model.type} • {model.year}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="text-bmw-blue" size={16} />
                      <span className="text-gray-600">Мощность:</span>
                    </div>
                    <span className="font-semibold text-bmw-dark-gray">
                      {model.power}
                    </span>

                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" className="text-bmw-blue" size={16} />
                      <span className="text-gray-600">0-100 км/ч:</span>
                    </div>
                    <span className="font-semibold text-bmw-dark-gray">
                      {model.acceleration}
                    </span>

                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-bmw-blue" size={16} />
                      <span className="text-gray-600">Запас хода:</span>
                    </div>
                    <span className="font-semibold text-bmw-dark-gray">
                      {model.range}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {model.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-bmw-blue">
                        {model.price}
                      </span>
                      <Icon
                        name="ExternalLink"
                        className="text-gray-400 group-hover:text-bmw-blue transition-colors"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Хотите узнать больше о технических характеристиках?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <Icon
                name="Settings"
                className="text-bmw-blue mx-auto mb-2"
                size={24}
              />
              <p className="text-sm text-gray-600">Конфигуратор</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <Icon
                name="BookOpen"
                className="text-bmw-blue mx-auto mb-2"
                size={24}
              />
              <p className="text-sm text-gray-600">Каталог</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <Icon
                name="Calendar"
                className="text-bmw-blue mx-auto mb-2"
                size={24}
              />
              <p className="text-sm text-gray-600">Тест-драйв</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
