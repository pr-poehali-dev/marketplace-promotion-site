import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Search',
      title: 'SEO-оптимизация',
      description: 'Выведем ваши товары в топ поисковой выдачи Wildberries',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Megaphone',
      title: 'Реклама на WB',
      description: 'Настройка рекламных кампаний с высокой конверсией',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'LineChart',
      title: 'Аналитика продаж',
      description: 'Глубокая аналитика для правильных решений',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Sparkles',
      title: 'Управление товарами',
      description: 'Полное сопровождение ассортимента',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const cases = [
    {
      icon: 'Sparkles',
      category: 'Косметика',
      title: 'Рост выручки с 7 → 22 млн',
      period: 'за 2 месяца в рамках ДРР',
      growth: '+214%',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Pill',
      category: 'БАДы',
      title: 'Рост с 1,5 → 4.3 млн',
      period: 'в рамках ДРР',
      growth: '+186%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Droplet',
      category: 'Бытовая химия',
      title: '21 млн в месяц',
      period: 'в рамках ДРР',
      growth: '21M',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Leaf',
      category: 'Садовые удобрения',
      title: 'Вывод в топ 1 ниши',
      period: 'Лидер рынка',
      growth: '#1',
      color: 'from-lime-500 to-green-500'
    },
    {
      icon: 'ArrowRightLeft',
      category: 'Оптимизация рекламы',
      title: 'Перевод 8 млн',
      period: 'с внутренней рекламы во внешнюю в рамках ДРР',
      growth: '8M',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const results = [
    { icon: 'TrendingUp', value: '+284%', label: 'Средний рост продаж' },
    { icon: 'Users', value: '1500+', label: 'Довольных клиентов' },
    { icon: 'Award', value: '98%', label: 'Остаются с нами' },
    { icon: 'Headphones', value: '24/7', label: 'Поддержка' }
  ];

  const advantages = [
    {
      icon: 'Target',
      title: 'Работаем в рамках ДРР',
      description: 'Гарантируем окупаемость инвестиций в рекламу'
    },
    {
      icon: 'BarChart3',
      title: 'Прозрачная аналитика',
      description: 'Ежедневные отчёты и доступ к дашбордам'
    },
    {
      icon: 'Zap',
      title: 'Быстрый результат',
      description: 'Первые продажи уже через 7-14 дней'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Работаем только белыми методами'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="TrendingUp" className="text-white" size={22} />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  WB Expert
                </div>
                <div className="text-xs text-muted-foreground">Продвижение на Wildberries</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Кейсы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </nav>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
                <Icon name="Award" className="mr-1" size={14} />
                Официальный партнёр Wildberries
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                Увеличим продажи<br />
                на <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Wildberries</span><br />
                в 3-5 раз
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Комплексное продвижение товаров на маркетплейсе #1 в России. 
                SEO, реклама, аналитика — всё для роста вашего бизнеса.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14 shadow-xl"
                  onClick={() => scrollToSection('contact')}
                >
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 border-2 hover:bg-muted"
                  onClick={() => scrollToSection('cases')}
                >
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Смотреть кейсы
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {results.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={stat.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Card className="relative shadow-2xl border-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name="Sparkles" className="text-white" size={20} />
                    </div>
                    Результат за 30 дней
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-br from-muted/50 to-muted rounded-2xl">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          Было
                        </div>
                        <div className="text-3xl font-bold">127</div>
                        <div className="text-xs text-muted-foreground">продаж</div>
                      </div>
                      <div className="px-4">
                        <Icon name="MoveRight" className="text-primary" size={32} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                          <Icon name="TrendingUp" size={14} />
                          Стало
                        </div>
                        <div className="text-3xl font-bold text-primary">542</div>
                        <div className="text-xs text-muted-foreground">продажи</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                          <Icon name="DollarSign" className="text-white" size={20} />
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">Рост оборота</div>
                        <div className="text-2xl font-bold text-green-600">+327%</div>
                      </div>
                      <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                          <Icon name="Eye" className="text-white" size={20} />
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">Просмотры</div>
                        <div className="text-2xl font-bold text-blue-600">+215%</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckCircle2" className="text-green-500" size={20} />
                      <span>Реальный кейс из практики</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Sparkles" className="mr-1" size={14} />
              Услуги
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Что мы делаем для вашего роста</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для успешных продаж на Wildberries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-white to-muted/30 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent hover:from-primary/5 hover:to-secondary/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name={adv.icon as any} className="text-white" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{adv.title}</h4>
                  <p className="text-sm text-muted-foreground">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Award" className="mr-1" size={14} />
              Наши кейсы
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Реальные результаты наших клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Цифры, которые говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${caseItem.color}`} />
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 bg-gradient-to-br ${caseItem.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon name={caseItem.icon as any} className="text-white" size={26} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {caseItem.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {caseItem.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className={`p-6 bg-gradient-to-br ${caseItem.color} rounded-2xl text-white text-center`}>
                    <div className="text-4xl font-bold mb-1">{caseItem.growth}</div>
                    <div className="text-sm opacity-90">результат</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="inline-block border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <Icon name="FileText" className="text-white" size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Получите подробные кейсы</h3>
                  <p className="text-muted-foreground">Отправим детальный разбор всех проектов на вашу почту</p>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg whitespace-nowrap">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать кейсы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-12 text-white">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              <Icon name="Rocket" className="mr-1" size={14} />
              Начните прямо сейчас
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Начните зарабатывать больше уже сегодня</h2>
            <p className="text-xl opacity-90">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Ваше имя
                    </label>
                    <Input placeholder="Иван Петров" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      Телефон
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.ru" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                    <Icon name="Link" size={16} />
                    Ссылка на ваш магазин WB (необязательно)
                  </label>
                  <Input placeholder="https://wildberries.ru/seller/..." className="h-12" />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-14 text-lg shadow-xl"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Получить консультацию
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>

              <div className="mt-10 pt-8 border-t grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67' },
                  { icon: 'Mail', label: 'Email', value: 'info@wbexpert.ru' },
                  { icon: 'MessageCircle', label: 'Telegram', value: '@wbexpert' }
                ].map((contact, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon name={contact.icon as any} className="text-white" size={20} />
                    </div>
                    <div className="text-sm font-medium mb-1">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="TrendingUp" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg">WB Expert</div>
                  <div className="text-xs text-gray-400">Продвижение на WB</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Профессиональное продвижение товаров на маркетплейсе Wildberries
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Briefcase" size={16} />
                Услуги
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {['SEO-оптимизация', 'Реклама на WB', 'Аналитика', 'Управление товарами'].map((item, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Building" size={16} />
                Компания
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {['О нас', 'Кейсы', 'Отзывы', 'Блог'].map((item, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Контакты
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@wbexpert.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={14} />
                  @wbexpert
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="Copyright" size={14} />
              2024 WB Expert. Все права защищены
            </div>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</span>
              <span className="hover:text-white transition-colors cursor-pointer">Договор оферты</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
