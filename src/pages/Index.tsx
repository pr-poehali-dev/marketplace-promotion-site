import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'TrendingUp',
      title: 'SEO-оптимизация',
      description: 'Выведем ваши товары в топ поисковой выдачи на Wildberries',
      features: ['Подбор ключевых слов', 'Оптимизация карточек', 'Анализ конкурентов']
    },
    {
      icon: 'Target',
      title: 'Реклама на WB',
      description: 'Настройка и ведение рекламных кампаний с высокой конверсией',
      features: ['Поиск', 'Карусель', 'Каталог', 'Автореклама']
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика продаж',
      description: 'Глубокая аналитика для принятия правильных решений',
      features: ['Мониторинг метрик', 'Отчёты по продажам', 'ABC-анализ']
    },
    {
      icon: 'Package',
      title: 'Управление товарами',
      description: 'Полное сопровождение товарного ассортимента',
      features: ['Загрузка товаров', 'Обновление цен', 'Управление остатками']
    }
  ];

  const plans = [
    {
      name: 'Базовый',
      price: '19 990',
      description: 'Для начинающих продавцов',
      features: [
        'До 50 SKU',
        'SEO-оптимизация карточек',
        'Еженедельные отчёты',
        'Email поддержка',
        'Базовая аналитика'
      ],
      recommended: false
    },
    {
      name: 'Профессионал',
      price: '39 990',
      description: 'Оптимальный выбор',
      features: [
        'До 200 SKU',
        'Всё из тарифа Базовый',
        'Управление рекламой',
        'Персональный менеджер',
        'Продвинутая аналитика',
        'Приоритетная поддержка'
      ],
      recommended: true
    },
    {
      name: 'Бизнес',
      price: '79 990',
      description: 'Для крупных продавцов',
      features: [
        'Безлимитное количество SKU',
        'Всё из тарифа Профессионал',
        'Стратегия продвижения',
        'Команда специалистов',
        'A/B тестирование',
        'Круглосуточная поддержка'
      ],
      recommended: false
    }
  ];

  const results = [
    { value: '+284%', label: 'Рост продаж' },
    { value: '1500+', label: 'Довольных клиентов' },
    { value: '98%', label: 'Остаются с нами' },
    { value: '24/7', label: 'Поддержка' }
  ];

  const caseStudies = [
    {
      category: 'Детские товары',
      title: 'Развивающие игрушки',
      before: '45',
      after: '342',
      growth: '+660%',
      period: '3 месяца',
      color: 'bg-blue-500'
    },
    {
      category: 'Красота',
      title: 'Косметика для волос',
      before: '78',
      after: '521',
      growth: '+568%',
      period: '2 месяца',
      color: 'bg-pink-500'
    },
    {
      category: 'Спорт',
      title: 'Фитнес-аксессуары',
      before: '124',
      after: '687',
      growth: '+454%',
      period: '4 месяца',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={22} />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">WB Expert</div>
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
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </nav>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-white hover:bg-primary/90">
                Официальный партнёр Wildberries
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Увеличим продажи<br />
                на <span className="text-primary">Wildberries</span><br />
                в 3-5 раз
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Комплексное продвижение товаров на маркетплейсе #1 в России. 
                SEO, реклама, аналитика — всё для роста вашего бизнеса.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg h-14"
                  onClick={() => scrollToSection('contact')}
                >
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 border-2"
                  onClick={() => scrollToSection('cases')}
                >
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Смотреть кейсы
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {results.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Card className="relative shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-xl">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Sparkles" size={24} />
                    Результат за 30 дней
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Было</div>
                        <div className="text-2xl font-bold">127 продаж</div>
                      </div>
                      <Icon name="ArrowRight" className="text-muted-foreground" size={24} />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Стало</div>
                        <div className="text-2xl font-bold text-primary">542 продажи</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <Icon name="TrendingUp" className="text-primary mb-2" size={28} />
                        <div className="text-sm text-muted-foreground mb-1">Рост оборота</div>
                        <div className="text-xl font-bold text-primary">+327%</div>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <Icon name="Eye" className="text-primary mb-2" size={28} />
                        <div className="text-sm text-muted-foreground mb-1">Просмотры</div>
                        <div className="text-xl font-bold text-primary">+215%</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" className="text-green-500" size={20} />
                        <span>Реальный кейс из практики</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы делаем для вашего роста</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для успешных продаж на Wildberries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                onClick={() => setActiveService(index)}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Бесплатный аудит вашего магазина</h3>
                    <p className="text-muted-foreground">Узнайте, что мешает росту ваших продаж на WB</p>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Получить аудит
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Кейсы</Badge>
            <h2 className="text-4xl font-bold mb-4">Реальные результаты наших клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Цифры говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className={`h-2 ${study.color}`} />
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{study.category}</Badge>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-sm">Срок: {study.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Было продаж/мес</div>
                        <div className="text-2xl font-bold">{study.before}</div>
                      </div>
                      <Icon name="MoveRight" className="text-muted-foreground" size={24} />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Стало</div>
                        <div className="text-2xl font-bold text-primary">{study.after}</div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">{study.growth}</div>
                      <div className="text-sm text-muted-foreground">прирост продаж</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2">
              Посмотреть все кейсы
              <Icon name="ExternalLink" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий тариф</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены. Никаких скрытых платежей. Результат гарантирован.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.recommended 
                    ? 'border-2 border-primary shadow-2xl scale-105 z-10' 
                    : 'hover:shadow-xl transition-all duration-300'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Icon name="Star" className="mr-1" size={14} />
                      Рекомендуем
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={plan.recommended ? 'bg-primary/5' : ''}>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">₽/мес</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon 
                          name="CheckCircle2" 
                          className={`flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-primary' : 'text-green-500'}`}
                          size={20} 
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.recommended 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-white hover:bg-muted'
                    }`}
                    variant={plan.recommended ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.recommended ? 'Начать сейчас' : 'Выбрать тариф'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-white">
            <CardContent className="p-8 text-center">
              <Icon name="Sparkles" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Индивидуальное предложение</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Нужен особый подход? Обсудим ваши задачи и составим персональное предложение
              </p>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Начните зарабатывать больше уже сегодня</h2>
            <p className="text-lg opacity-90">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input placeholder="Иван Петров" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="your@email.ru" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ссылка на ваш магазин WB (необязательно)</label>
                  <Input placeholder="https://wildberries.ru/seller/..." className="h-12" />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 h-14 text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Получить консультацию
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>

              <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Phone" className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-sm font-medium mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
                <div>
                  <Icon name="Mail" className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-sm font-medium mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@wbexpert.ru</div>
                </div>
                <div>
                  <Icon name="MessageCircle" className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-sm font-medium mb-1">Telegram</div>
                  <div className="text-sm text-muted-foreground">@wbexpert</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-lg">WB Expert</div>
                  <div className="text-xs text-gray-400">Продвижение на WB</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональное продвижение товаров на маркетплейсе Wildberries
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">SEO-оптимизация</li>
                <li className="hover:text-white transition-colors cursor-pointer">Реклама на WB</li>
                <li className="hover:text-white transition-colors cursor-pointer">Аналитика</li>
                <li className="hover:text-white transition-colors cursor-pointer">Управление товарами</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-white transition-colors cursor-pointer">Кейсы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Отзывы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Блог</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@wbexpert.ru</li>
                <li>@wbexpert</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2024 WB Expert. Все права защищены</div>
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
