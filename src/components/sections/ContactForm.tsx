'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type FormData = {
    projectType: string;
    surface: string;
    name: string;
    email: string;
    phone: string;
    message: string;
};

export function ContactForm() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        projectType: '',
        surface: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const canProceed = (currentStep: number) => {
        if (currentStep === 1) {
            return !!(formData.projectType && formData.surface);
        }
        if (currentStep === 2) {
            return !!(formData.name && formData.email && formData.phone);
        }
        return !!formData.message;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Si l'utilisateur appuie sur Entrée aux étapes 1 ou 2, on avance seulement si les champs requis sont remplis
        if (step < 3) {
            if (!canProceed(step)) {
                setError(t.contact.form.required_fields);
                return;
            }

            setError(null);
            setStep((prev) => Math.min(3, prev + 1));
            return;
        }

        if (!canProceed(3)) {
            setError(t.contact.form.required_fields);
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Prepare full message with project details
            const fullMessage = `Type de projet: ${formData.projectType}
Surface: ${formData.surface}m²

${formData.message}`;

            // Insert into Supabase
            const { error: supabaseError } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: fullMessage,
                    }
                ]);

            if (supabaseError) {
                // Vérifier si c'est une erreur de configuration Supabase
                if (supabaseError.message?.includes('placeholder') || supabaseError.code === 'PGRST116') {
                    console.warn('Supabase n\'est pas configuré. Le formulaire ne peut pas être soumis.');
                    setError('Supabase n\'est pas configuré. Veuillez configurer les variables d\'environnement.');
                    return;
                }
                throw supabaseError;
            }

            setIsSubmitted(true);
        } catch (err: any) {
            console.error('Error submitting form:', err);
            if (err?.message?.includes('placeholder') || err?.code === 'PGRST116') {
                setError('Supabase n\'est pas configuré. Veuillez configurer les variables d\'environnement.');
            } else {
                setError(t.contact.error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (isSubmitted) {
        return (
            <Section id="contact" className="bg-bg-dark border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <Card className="p-12 border-accent-stone/30">
                        <CheckCircle2 className="h-16 w-16 text-accent-stone mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">{t.contact.success.title}</h3>
                        <p className="text-white/60">
                            {t.contact.success.desc}
                        </p>
                    </Card>
                </motion.div>
            </Section>
        );
    }

    return (
        <Section id="contact" className="bg-bg-dark border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-accent-stone font-medium mb-4 tracking-wide uppercase text-sm">
                        {t.contact.subtitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                        {t.contact.title}
                    </h3>
                    <p className="text-white/60">
                        {t.contact.description}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`flex-1 h-2 rounded-full mx-1 transition-colors ${s <= step ? 'bg-accent-stone' : 'bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-center text-sm text-white/60">{t.contact.step} {step} {t.contact.of} 3</p>
                </div>

                <Card className="p-8">
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label className="block text-white mb-3 font-medium">{t.contact.form.project_type}</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[t.contact.form.types.renovation, t.contact.form.types.new].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => updateField('projectType', type)}
                                                    className={`p-4 rounded-lg border-2 transition-all ${formData.projectType === type
                                                        ? 'border-accent-stone bg-accent-stone/10'
                                                        : 'border-white/10 hover:border-white/20'
                                                        }`}
                                                >
                                                    <span className="text-white font-medium">{type}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white mb-3 font-medium">
                                            {t.contact.form.surface}
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="Ex: 25"
                                            value={formData.surface}
                                            onChange={(e) => updateField('surface', e.target.value)}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label className="block text-white mb-3 font-medium">{t.contact.form.name}</label>
                                        <Input
                                            type="text"
                                            placeholder="Jean Dupont"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white mb-3 font-medium">{t.contact.form.email}</label>
                                        <Input
                                            type="email"
                                            placeholder="jean.dupont@email.com"
                                            value={formData.email}
                                            onChange={(e) => updateField('email', e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white mb-3 font-medium">{t.contact.form.phone}</label>
                                        <Input
                                            type="tel"
                                            placeholder="06 12 34 56 78"
                                            value={formData.phone}
                                            onChange={(e) => updateField('phone', e.target.value)}
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label className="block text-white mb-3 font-medium">
                                            {t.contact.form.message_label}
                                        </label>
                                        <textarea
                                            className="flex min-h-[150px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-stone"
                                            placeholder={t.contact.form.message_placeholder}
                                            value={formData.message}
                                            onChange={(e) => updateField('message', e.target.value)}
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                            >
                                <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                                <p className="text-red-500 text-sm">{error}</p>
                            </motion.div>
                        )}

                        <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                            {step > 1 && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setStep(step - 1)}
                                    disabled={isSubmitting}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t.contact.form.prev}
                                </Button>
                            )}

                            {step < 3 ? (
                                <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => setStep(step + 1)}
                                    className="ml-auto"
                                    disabled={
                                        (step === 1 && (!formData.projectType || !formData.surface)) ||
                                        (step === 2 && (!formData.name || !formData.email || !formData.phone))
                                    }
                                >
                                    {t.contact.form.next}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="ml-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </form>
                </Card>
            </div>
        </Section>
    );
}
