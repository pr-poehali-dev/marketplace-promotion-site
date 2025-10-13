import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'main', label: 'Главная' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'pricing', label: 'Тарифы' },
    { id: 'blog', label: 'Блог' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'faq', label: 'FAQ' },
    { id: 'team', label: 'О команде' }
  ];

  const cases = [
    { 
      title: 'Обруч для спорта', 
      growth: '205%', 
      metric: 'рост продаж за 2 месяца',
      category: 'Спорт и фитнес'
    },
    { 
      title: 'Детская одежда', 
      growth: '175%', 
      metric: 'увеличение видимости',
      category: 'Детские товары'
    },
    { 
      title: 'Косметика для волос', 
      growth: '320%', 
      metric: 'рост конверсии',
      category: 'Красота и здоровье'
    }
  ];

  const pricingPlans = [
    {
      name: 'Старт',
      price: '15 000',
      period: 'месяц',
      features: [
        'Анализ конкурентов',
        'Оптимизация карточек товара',
        'Базовая аналитика',
        'Email поддержка'
      ]
    },
    {
      name: 'Профи',
      price: '35 000',
      period: 'месяц',
      popular: true,
      features: [
        'Всё из тарифа Старт',
        'Управление рекламой',
        'Продвинутая аналитика',
        'Приоритетная поддержка',
        'Еженедельные отчёты'
      ]
    },
    {
      name: 'Премиум',
      price: '75 000',
      period: 'месяц',
      features: [
        'Всё из тарифа Профи',
        'Персональный менеджер',
        'Разработка стратегии',
        'A/B тестирование',
        'Круглосуточная поддержка'
      ]
    }
  ];

  const blogPosts = [
    {
      title: '10 секретов успешных продаж на Wildberries',
      date: '15 марта 2024',
      readTime: '5 мин'
    },
    {
      title: 'Как правильно настроить рекламу на маркетплейсе',
      date: '12 марта 2024',
      readTime: '7 мин'
    },
    {
      title: 'Аналитика продаж: что важно отслеживать',
      date: '8 марта 2024',
      readTime: '6 мин'
    }
  ];

  const teamMembers = [
    {
      name: 'Анна Петрова',
      role: 'CEO & Founder',
      experience: '8 лет в e-commerce'
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Head of Marketing',
      experience: '6 лет в digital'
    },
    {
      name: 'Елена Смирнова',
      role: 'Analytics Lead',
      experience: '5 лет в аналитике'
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро появятся результаты?',
      answer: 'Первые результаты вы увидите уже через 2-3 недели работы. Значительный рост продаж обычно наблюдается через 1-2 месяца систематической работы.'
    },
    {
      question: 'Какие гарантии вы даёте?',
      answer: 'Мы гарантируем профессиональный подход и прозрачность всех действий. Вы получаете еженедельные отчёты и можете отслеживать все метрики в реальном времени.'
    },
    {
      question: 'Можно ли сменить тариф?',
      answer: 'Да, вы можете изменить тариф в любой момент. При переходе на более высокий тариф разница пересчитывается пропорционально.'
    },
    {
      question: 'Работаете ли вы с начинающими продавцами?',
      answer: 'Да, мы работаем как с начинающими, так и с опытными продавцами. Для новичков у нас есть специальная программа адаптации.'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="wave-blob bg-primary/20 w-96 h-96 -top-48 -right-48" />
      <div className="wave-blob bg-primary/10 w-[500px] h-[500px] top-1/3 -left-48 animation-delay-2000" />
      <div className="wave-blob bg-primary/15 w-[400px] h-[400px] bottom-0 right-1/4 animation-delay-4000" />

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="ShoppingCart" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-foreground">WB Promo</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeTab === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              Начать сотрудничество
            </Button>
          </div>
        </div>
      </nav>

      <section id="main" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Продвижение товаров на Wildberries
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Увеличим продажи на Wildberries
                <span className="text-primary"> в 2-3 раза</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональное продвижение товаров на маркетплейсе Wildberries. 
                Комплексный подход, прозрачная аналитика и гарантированный результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => scrollToSection('pricing')}
                >
                  Выбрать тариф
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('cases')}
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <Card className="bg-white shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="TrendingUp" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">+205%</div>
                      <div className="text-sm text-muted-foreground">средний рост продаж</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-border" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">150+</div>
                      <div className="text-sm text-muted-foreground">клиентов</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">3 года</div>
                      <div className="text-sm text-muted-foreground">на рынке</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Кейсы</Badge>
            <h2 className="text-4xl font-bold mb-4">Результаты наших клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Реальные цифры роста продаж и видимости товаров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">
                    {caseItem.category}
                  </Badge>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {caseItem.growth}
                  </div>
                  <CardDescription className="text-base">
                    {caseItem.metric}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий план</h2>
            <p className="text-lg text-muted-foreground">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-2xl scale-105' 
                    : 'hover:shadow-xl transition-all duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price} ₽</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-white hover:bg-muted'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Полезные материалы</h2>
            <p className="text-lg text-muted-foreground">
              Статьи и советы по продвижению на маркетплейсах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="BookOpen" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground">
              Профессионалы с многолетним опытом в e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-4">Контакты</Badge>
              <CardTitle className="text-3xl">Готовы начать?</CardTitle>
              <CardDescription className="text-base">
                Свяжитесь с нами и получите бесплатную консультацию
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">info@wbpromo.ru</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-semibold">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <div className="font-semibold">@wbpromo</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Ответим в течение 15 минут в рабочее время
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="ShoppingCart" className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold">WB Promo</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональное продвижение товаров на Wildberries
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Продвижение товаров</li>
                <li>Аналитика продаж</li>
                <li>Управление рекламой</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@wbpromo.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>@wbpromo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 WB Promo. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
