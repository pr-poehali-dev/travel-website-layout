import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const destinations = [
    {
      name: "Париж",
      description: "Город огней и романтики, где каждая улица дышит историей и искусством.",
      image: "https://cdn.poehali.dev/projects/ecd4f360-e64e-48f6-84b9-80b7f1652a87/files/21d2af50-be07-4098-9319-3bf6d197477e.jpg",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Лондон",
      description: "Величественная столица с богатой культурой, королевскими традициями и современной энергией.",
      image: "/placeholder.svg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Токио",
      description: "Футуристический мегаполис, где древние храмы соседствуют с неоновыми небоскрёбами.",
      image: "https://cdn.poehali.dev/projects/ecd4f360-e64e-48f6-84b9-80b7f1652a87/files/47f215b4-0c60-4f5f-95d8-7a8e6174a86e.jpg",
      color: "from-pink-500 to-orange-500"
    }
  ];

  const tips = [
    { icon: "Hotel", title: "Выбор отеля", text: "Бронируйте заранее и читайте отзывы" },
    { icon: "Backpack", title: "Что взять", text: "Составьте чек-лист необходимых вещей" },
    { icon: "Shield", title: "Безопасность", text: "Оформите страховку перед поездкой" },
    { icon: "Wallet", title: "Бюджет", text: "Планируйте расходы и ищите скидки" }
  ];

  const news = [
    { 
      title: "Лучшие направления зимы 2025", 
      date: "10 ноября",
      tag: "Тренды"
    },
    { 
      title: "Как путешествовать экономно", 
      date: "8 ноября",
      tag: "Советы"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center animate-scale-in">
                <Icon name="Plane" className="text-white" size={24} />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Моя Путешествия
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {["Главная", "Направления", "Фото"].map((item, idx) => (
                <a 
                  key={item}
                  href="#"
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/ecd4f360-e64e-48f6-84b9-80b7f1652a87/files/0b9fe4cc-23c2-4342-bd1d-f6ff6e887092.jpg')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Icon name="Sparkles" size={16} className="mr-1" />
              Вдохновение для путешествий
            </Badge>
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Откройте мир с нами
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Каждое путешествие начинается с мечты. Позвольте нам помочь вам превратить её в незабываемые воспоминания.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              <Icon name="Compass" size={20} className="mr-2" />
              Начать путешествие
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" size={24} />
                Популярные направления
              </h3>
              <div className="space-y-4">
                {destinations.map((dest, idx) => (
                  <div 
                    key={dest.name}
                    className="group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${dest.color} rounded-full mb-2 group-hover:scale-x-105 transition-transform origin-left`}></div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{dest.name}</h4>
                    <p className="text-sm text-muted-foreground">{dest.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </aside>

          <section className="lg:col-span-6 space-y-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl animate-scale-in">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Моё любимое путешествие
              </h3>
              
              <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/ecd4f360-e64e-48f6-84b9-80b7f1652a87/files/21d2af50-be07-4098-9319-3bf6d197477e.jpg"
                  alt="Париж"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="prose max-w-none space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Париж навсегда изменил моё представление о путешествиях. Это не просто город – это живое произведение искусства, где каждый переулок рассказывает свою историю. Утренний круассан в уютном кафе на Монмартре, вечерняя прогулка вдоль Сены под мерцающим светом Эйфелевой башни – эти моменты останутся со мной навсегда.
                </p>
                <p>
                  Самым волнующим было открытие, что Париж – это не только музеи и памятники. Это атмосфера, которая проникает в душу: запах свежеиспечённого хлеба по утрам, мелодичная французская речь, улыбки уличных художников на Монмартре. Я понял, что настоящее путешествие – это не только о местах, но и о людях, которых встречаешь, и эмоциях, которые испытываешь.
                </p>
                <p>
                  Эта поездка научила меня ценить каждый момент и быть открытым к новым впечатлениям. Теперь я мечтаю вернуться в Париж весной, когда город утопает в цветах, и открыть для себя новые грани этого удивительного места.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.map((dest, idx) => (
                <Card 
                  key={dest.name}
                  className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                    <h4 className="absolute bottom-4 left-4 text-white font-bold text-2xl">{dest.name}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <aside className="lg:col-span-3 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Lightbulb" className="text-accent" size={24} />
                Советы путешественникам
              </h3>
              <div className="space-y-4">
                {tips.map((tip, idx) => (
                  <div 
                    key={tip.title}
                    className="flex gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-all cursor-pointer hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name={tip.icon as any} className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Newspaper" className="text-secondary" size={24} />
                Новости путешествий
              </h3>
              <div className="space-y-4">
                {news.map((item, idx) => (
                  <div 
                    key={item.title}
                    className="pb-4 border-b last:border-0 cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <Badge className="mb-2 bg-accent/20 text-accent border-accent/30 text-xs">
                      {item.tag}
                    </Badge>
                    <h4 className="font-bold group-hover:text-primary transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:scale-105 transition-transform animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Сообщество</h3>
            <p className="text-muted-foreground">Присоединяйтесь к 50,000+ путешественников по всему миру</p>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Camera" className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Галерея</h3>
            <p className="text-muted-foreground">Тысячи вдохновляющих фотографий из путешествий</p>
          </Card>

          <Card className="p-8 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Гиды</h3>
            <p className="text-muted-foreground">Экспертные путеводители по лучшим направлениям</p>
          </Card>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fade-in">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Plane" size={24} />
                Моя Путешествия
              </h4>
              <p className="text-white/80">
                Вдохновляем на новые открытия и незабываемые приключения по всему миру.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@mytravel.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h4 className="text-xl font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <button 
                    key={social}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon name="Share2" size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2025 Моя Путешествия. Создано с любовью к путешествиям ✈️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
