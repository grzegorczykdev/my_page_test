import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { Sparkles, MessageCircleQuestion, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';

const FAQSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    { id: 'item-1', questionKey: 'faq.q1.question', answerKey: 'faq.q1.answer' },
    { id: 'item-2', questionKey: 'faq.q2.question', answerKey: 'faq.q2.answer' },
    { id: 'item-3', questionKey: 'faq.q3.question', answerKey: 'faq.q3.answer' },
    { id: 'item-4', questionKey: 'faq.q4.question', answerKey: 'faq.q4.answer' },
    { id: 'item-5', questionKey: 'faq.q5.question', answerKey: 'faq.q5.answer' },
  ];

  const highlights = [
    t('faq.q2.answer'),
    t('faq.q5.answer'),
  ];

  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: t(item.questionKey),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(item.answerKey),
        },
      })),
    }),
    [faqs, t],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="faq" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider inline-flex items-center gap-2 justify-center">
            <Sparkles className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-[1.8fr,1fr] gap-8"
        >
          {/* FAQ list */}
          <motion.div
            variants={itemVariants}
            className="bento-item glass border border-white/25 bg-card/80 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                <MessageCircleQuestion className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Top questions</p>
                <p className="font-semibold text-primary">Clear answers for clients</p>
              </div>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1" className="divide-y divide-border">
              {faqs.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-0">
                  <AccordionTrigger className="text-left text-base font-semibold text-primary">
                    {t(item.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {t(item.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* SEO/CTA card */}
          <motion.div
            variants={itemVariants}
            className="bento-item bg-gradient-to-br from-primary to-navy-light text-primary-foreground border border-primary/40 shadow-lg shadow-primary/15"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 text-primary-foreground flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/80">SEO boost</p>
                <p className="font-semibold text-primary-foreground">Structured answers Google likes</p>
              </div>
            </div>

            <div className="space-y-3">
              {highlights.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-amber-200" />
                  <p className="text-primary-foreground/90 leading-relaxed text-sm">{line}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-sm text-primary-foreground/80">
                Masz inne pytanie? Napisz, a dodam je do FAQ i zoptymalizuję pod wyszukiwarki.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-xl shadow-premium-xl w-full sm:w-auto"
              >
                <a href="#contact" className="inline-flex items-center">
                  {t('nav.cta.contact')}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SEO: FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
};

export default FAQSection;
