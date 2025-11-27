import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const tariffs = [
    {
      name: 'Эконом',
      icon: 'Car',
      price: 'от 150 ₽',
      description: 'Комфортные седаны для ежедневных поездок',
      features: ['4 места', 'Кондиционер', 'Чистый салон']
    },
    {
      name: 'Комфорт',
      icon: 'Smartphone',
      price: 'от 250 ₽',
      description: 'Автомобили повышенной комфортности',
      features: ['4 места', 'Премиум авто', 'Wi-Fi в салоне']
    },
    {
      name: 'Минивэн',
      icon: 'Users',
      price: 'от 400 ₽',
      description: 'Вместительные автомобили для больших компаний',
      features: ['6-7 мест', 'Багажник XL', 'Детские кресла']
    }
  ];

  const advantages = [
    { icon: 'Clock', title: 'Быстрая подача', text: 'Среднее время ожидания 3-5 минут' },
    { icon: 'Shield', title: 'Безопасность', text: 'Проверенные водители с опытом' },
    { icon: 'Banknote', title: 'Честные цены', text: 'Без скрытых доплат и комиссий' },
    { icon: 'Star', title: 'Высокий рейтинг', text: '4.8 из 5 по отзывам клиентов' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
              <Icon name="Sun" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-secondary">Заря</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#tariffs" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <a href="tel:+79787654321" className="flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={20} />
            +7 (978) 765-43-21
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Такси в Евпатории
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Надёжный сервис с заботой о каждом пассажире. Работаем круглосуточно для вашего комфорта.
              </p>
              
              <Card className="shadow-xl animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Заказать такси</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Icon name="MapPin" className="absolute left-3 top-3 text-primary" size={20} />
                      <Input
                        placeholder="Откуда"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                    <div className="relative">
                      <Icon name="MapPin" className="absolute left-3 top-3 text-muted-foreground" size={20} />
                      <Input
                        placeholder="Куда"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold">
                      Рассчитать стоимость
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-300/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/79a5e71e-0cbc-43c2-816c-394e115ba309/files/de16cfd7-2ab3-415e-9592-2fff395edf76.jpg"
                alt="Такси Заря"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящий вариант для вашей поездки</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={tariff.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{tariff.price}</div>
                  <p className="text-muted-foreground mb-6">{tariff.description}</p>
                  <div className="space-y-2">
                    {tariff.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">О нас</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Мы работаем с 2018 года и знаем Евпаторию как свои пять пальцев
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((item, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Работаем круглосуточно, без выходных</p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <a href="tel:+79787654321" className="text-primary hover:underline text-lg">
                          +7 (978) 765-43-21
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес офиса</h3>
                        <p className="text-muted-foreground">г. Евпатория, ул. Фрунзе, 15</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Режим работы</h3>
                        <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-0 h-full">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=33.366669%2C45.190556&z=13&l=map&pt=33.366669,45.190556,pm2rdm"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="min-h-[300px]"
                    title="Карта Евпатории"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                <Icon name="Sun" className="text-white" size={28} />
              </div>
              <span className="text-3xl font-bold">Заря</span>
            </div>
            <p className="text-white/70 mb-6">Такси в Евпатории — ваш надёжный выбор</p>
            <div className="flex justify-center gap-6 text-white/60 text-sm">
              <span>© 2024 Такси Заря</span>
              <span>•</span>
              <span>Все права защищены</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
