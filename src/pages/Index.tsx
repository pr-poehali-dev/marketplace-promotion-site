import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }} />

      <div className="relative z-10 container mx-auto px-6 py-24 max-w-7xl">
        {/* Header tag */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-muted/50 backdrop-blur-xl">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              Новый подход к рекламе на WB
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-32">
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter mb-8">
            <span className="block text-muted-foreground">Но мы не просто</span>
            <span className="block text-foreground">
              таргетологи,
            </span>
            <span className="block mt-2">
              мы еще и{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  селлеры
                </span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl" />
              </span>
            </span>
          </h1>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {/* Card 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold shadow-2xl">
                1
              </div>

              {/* Icon */}
              <div className="mb-8 mt-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="Target" className="text-primary" size={36} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">
                Погружаемся<br />в вашу воронку
              </h3>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Даем рекомендации по улучшению конверсий вашей карточки
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-8 right-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name="TrendingUp" size={128} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-10 rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold shadow-2xl">
                2
              </div>

              {/* Icon */}
              <div className="mb-8 mt-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="ClipboardCheck" className="text-secondary" size={36} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">
                Знаем что и как<br />отслеживать
              </h3>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Даём чек-листы и таблицы для аналитики
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-8 right-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name="BarChart3" size={128} />
              </div>
            </div>
          </div>

          {/* Card 3 - Highlighted */}
          <div className="group relative md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full p-10 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold shadow-2xl">
                3
              </div>

              {/* Special badge */}
              <div className="absolute -top-3 -right-3">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2">
                  <Icon name="Sparkles" size={14} />
                  Уникально
                </div>
              </div>

              {/* Icon */}
              <div className="mb-8 mt-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon name="DollarSign" className="text-primary" size={36} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">
                Единственные<br />на рынке
              </h3>

              {/* Description */}
              <p className="text-lg text-foreground leading-relaxed font-medium">
                Отталкиваемся от вашей экономики,{' '}
                <span className="text-primary font-bold">а не стоимости клика</span>
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-8 right-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name="Crown" size={128} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-xl text-muted-foreground tracking-wide">
              А значит, вы получаете результат
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Icon name="ArrowDown" className="text-primary animate-bounce" size={24} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-primary animate-ping opacity-30" />
        <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-secondary animate-pulse opacity-20" />
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 rounded-full bg-primary animate-pulse opacity-20" />
      </div>
    </div>
  );
};

export default Index;