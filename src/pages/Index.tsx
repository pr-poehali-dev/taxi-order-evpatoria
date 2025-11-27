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
      price: 'от 90 ₽',
      description: 'Комфортные седаны для ежедневных поездок',
      features: ['4 места', 'Кондиционер', '13 ₽/км']
    },
    {
      name: 'Комфорт',
      icon: 'Smartphone',
      price: 'от 120 ₽',
      description: 'Автомобили повышенной комфортности',
      features: ['4 места', 'Премиум авто', '16 ₽/км']
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
          <div className="mb-8 animate-fade-in">
            <Card className="bg-gradient-to-r from-primary/10 to-orange-100 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Icon name="Smartphone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">С приложения дешевле</h3>
                      <p className="text-sm text-muted-foreground">Поездки от 90 ₽</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.rustore.ru/catalog/app/uptaxi.all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                  >
                    <Icon name="Store" size={20} />
                    Скачать приложение
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Такси в Евпатории
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Надёжный сервис с заботой о каждом пассажире. Работаем круглосуточно для вашего комфорта.
              </p>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground mb-12 text-lg">Работаем круглосуточно, без выходных</p>

            <Card className="animate-fade-in max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-primary" size={32} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1 text-lg">Telegram</h3>
                    <a 
                      href="https://t.me/zarya_taxi" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-lg"
                    >
                      @zarya_taxi
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
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