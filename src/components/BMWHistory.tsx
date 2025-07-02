import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const historyData = [
  {
    year: "1916",
    title: "Основание BMW",
    description:
      "Bayerische Motoren Werke была основана в Мюнхене как производитель авиационных двигателей",
    icon: "Plane",
  },
  {
    year: "1928",
    title: "Первый автомобиль",
    description:
      "BMW 3/15 стал первым автомобилем компании, произведённым после приобретения Automobilwerk Eisenach",
    icon: "Car",
  },
  {
    year: "1959",
    title: "Эпоха 700-й серии",
    description:
      "BMW 700 спас компанию от банкротства и заложил основу современного успеха",
    icon: "TrendingUp",
  },
  {
    year: "1972",
    title: "Легендарная 5-я серия",
    description:
      "Запуск BMW 5 Series, которая стала эталоном спортивных седанов",
    icon: "Award",
  },
  {
    year: "2013",
    title: "Электрическое будущее",
    description: "Выход BMW i3 и i8 ознаменовал начало эры электрификации",
    icon: "Zap",
  },
  {
    year: "2024",
    title: "Современность",
    description:
      "BMW продолжает лидировать в сфере премиальных автомобилей и инноваций",
    icon: "Rocket",
  },
];

export function BMWHistory() {
  return (
    <section
      id="history"
      className="py-20 bg-gradient-to-b from-white to-bmw-light-blue/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-bmw-dark-gray mb-6">
            История BMW
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более века инноваций и стремления к совершенству. От авиационных
            двигателей до современных электромобилей
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bmw-blue to-bmw-light-blue rounded-full"></div>

          <div className="space-y-12">
            {historyData.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-bmw-blue">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center">
                          <Icon
                            name={item.icon as any}
                            className="text-white"
                            size={24}
                          />
                        </div>
                        <div>
                          <span className="text-2xl font-heading font-bold text-bmw-blue">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-heading font-semibold text-bmw-dark-gray">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-6 h-6 bg-bmw-blue rounded-full border-4 border-white shadow-lg z-10 relative"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
