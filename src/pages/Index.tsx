import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://cdn.poehali.dev/projects/aace6671-557a-4042-abf8-ba0d79264639/files/887c12c7-eb3f-4d4d-9c51-e3a3ce228209.jpg",
      alt: "Мероприятие общества"
    },
    {
      image: "https://cdn.poehali.dev/projects/aace6671-557a-4042-abf8-ba0d79264639/files/13fb2520-ab8f-4b6f-8517-c68c2fd7903a.jpg",
      alt: "Награждение"
    }
  ];

  const values = [
    {
      icon: "Zap",
      title: "Активность",
      description: "Мы идём, когда кто-то решает наши проблемы, а активно добиваемся своих целей"
    },
    {
      icon: "Users",
      title: "Полезность",
      description: "Всё, что мы делаем, должно быть полезно людям и обществу"
    },
    {
      icon: "Sparkles",
      title: "Равенство возможностей",
      description: "Инвалидность не должна ограничивать возможности человека в обществе или давать ему необоснованные привилегии"
    }
  ];

  const news = [
    {
      category: "Региональные новости",
      date: "24 октября, 2025",
      title: "Победителем Осеннего кубка",
      image: "https://cdn.poehali.dev/projects/aace6671-557a-4042-abf8-ba0d79264639/files/887c12c7-eb3f-4d4d-9c51-e3a3ce228209.jpg"
    },
    {
      category: "Главные новости",
      date: "23 октября, 2025",
      title: "Опубликован доклад МГИМО",
      image: "https://cdn.poehali.dev/projects/aace6671-557a-4042-abf8-ba0d79264639/files/13fb2520-ab8f-4b6f-8517-c68c2fd7903a.jpg"
    },
    {
      category: "Региональные новости",
      date: "21 октября, 2025",
      title: "Состоялась встреча",
      image: "https://cdn.poehali.dev/projects/aace6671-557a-4042-abf8-ba0d79264639/files/887c12c7-eb3f-4d4d-9c51-e3a3ce228209.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/8fe50b22-ca9b-4463-a4eb-c7e691612034.png" 
                alt="ВОИ лого" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="font-bold text-xl text-foreground">Всероссийское общество инвалидов</h1>
                <p className="text-sm text-primary">Вместе мы сильнее и больше!</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Мероприятия</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Новости</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Всероссийское общество инвалидов
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Мы идём, когда кто-то решает наши проблемы, а активно добиваемся своих целей
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10">
                Присоединиться
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex gap-3 z-10">
          <Button
            size="icon"
            variant="secondary"
            onClick={prevSlide}
            className="rounded-full bg-white/90 hover:bg-white"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={nextSlide}
            className="rounded-full bg-white/90 hover:bg-white"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Наши ценности
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={value.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                Новости
              </h2>
              <p className="text-lg text-muted-foreground">
                Актуальные события нашей организации
              </p>
            </div>
            <Button className="hidden md:flex">
              Все новости
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="w-full md:hidden mt-8">
            Все новости
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">ВОИ</span>
                </div>
                <span className="font-bold text-lg">Всероссийское общество инвалидов</span>
              </div>
              <p className="text-white/80 text-sm">
                Вместе мы сильнее и больше!
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мероприятия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@voi.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>© 2025 Всероссийское общество инвалидов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;