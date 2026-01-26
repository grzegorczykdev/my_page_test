import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Bot, Palette, Rocket, ServerCog, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const serviceGroups = [
    {
      icon: Palette,
      badgeBg: 'bg-accent/15',
      badgeText: 'text-accent',
      titleKey: 'services.group.dev.title',
      descKey: 'services.group.dev.desc',
      bullets: ['services.group.dev.b1', 'services.group.dev.b2', 'services.group.dev.b3'],
    },
    {
      icon: Sparkles,
      badgeBg: 'bg-indigo-400/15',
      badgeText: 'text-indigo-200',
      titleKey: 'services.group.seoai.title',
      descKey: 'services.group.seoai.desc',
      bullets: ['services.group.seoai.b1', 'services.group.seoai.b2', 'services.group.seoai.b3'],
    },
    {
      icon: ServerCog,
      badgeBg: 'bg-emerald-400/15',
      badgeText: 'text-emerald-200',
      titleKey: 'services.group.care.title',
      descKey: 'services.group.care.desc',
      bullets: ['services.group.care.b1', 'services.group.care.b2', 'services.group.care.b3'],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="services"
      className="section-padding pb-12 md:pb-16 bg-primary text-white"
      ref={ref}
    >
      <div className="container-custom space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-3xl"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            {t('services.title')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            {t('services.title')}
          </h2>
          <p className="text-lg text-white/70">{t('services.subtitle.compact')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {serviceGroups.map((group, index) => {
            const isLast = index === serviceGroups.length - 1;
            return (
              <motion.article
                key={group.titleKey}
                variants={fadeUp}
                className={`bento-item h-full flex flex-col gap-4 glass bg-white/[0.03] border-white/10 text-white ${
                  isLast ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${group.badgeBg} ${group.badgeText}`}
                  >
                    <group.icon className="w-6 h-6" />
                  </div>
                  <Rocket className="w-5 h-5 text-white/40" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-white">
                    {t(group.titleKey)}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">{t(group.descKey)}</p>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {group.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
