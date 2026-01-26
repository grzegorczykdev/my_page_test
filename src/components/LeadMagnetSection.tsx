import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  message: z.string().trim().min(10, 'Message is too short').max(2000),
});

const LeadMagnetSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      formSchema.parse(formData);

      const form = e.target as HTMLFormElement;
      const botFieldValue =
        (form.elements.namedItem('bot-field') as HTMLInputElement | null)?.value || '';

      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        'bot-field': botFieldValue,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        setSubmitError(t('lead.error'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding pt-10 md:pt-14 bg-primary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass bg-card/80 rounded-3xl p-8 md:p-12 shadow-premium-xl border border-white/30"
        >
          {!isSubmitted ? (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold">
                  {t('lead.badge')}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary leading-tight">
                  {t('lead.heading')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>{t('lead.subtitle.highlight')}</strong>
                  {t('lead.subtitle.rest')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>{t('lead.body.highlight')}</strong>
                  {t('lead.body.rest')}
                </p>
                <p className="text-sm text-muted-foreground">{t('lead.custom')}</p>
              </div>

              {/* Right - Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 glass rounded-2xl p-4 md:p-6 border border-white/20 shadow-premium-lg bg-white/5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden" aria-hidden="true">
                  <label className="text-xs text-muted-foreground">
                    Don’t fill this out if you are human:
                    <input
                      name="bot-field"
                      tabIndex={-1}
                      className="mt-1 block w-full bg-transparent text-xs"
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t('lead.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    {t('lead.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t('lead.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('lead.messagePlaceholder')}
                    className={`w-full rounded-md border bg-transparent px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                      errors.message ? 'border-destructive' : 'border-border'
                    }`}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full mt-4 glass border border-white/30 shadow-premium-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      {t('lead.processing')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">{t('lead.submit')}</span>
                  )}
                </Button>
                {submitError && (
                  <p className="text-xs text-destructive text-center">{submitError}</p>
                )}
              </form>
            </div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8 glass rounded-2xl border border-white/20 bg-white/5"
            >
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Thank You!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">{t('lead.success')}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
