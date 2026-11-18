import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/common/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      // Simulate form dispatch or backend API integration
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('CYGNUSA Consultation Request:', data);
      setSubmitted(true);
      reset();
    } catch (err) {
      setServerError('An unexpected error occurred. Please reach out directly to sales@cygnusa.in');
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-[8px] p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold font-heading text-emerald-950">
          Consultation Request Received
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you for connecting with CYGNUSA Technologies. A senior technology partner will review your inquiry and follow up within 1 business day.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-cygnusa-border rounded-[8px] p-6 sm:p-8 shadow-card space-y-5"
      noValidate
    >
      <div className="border-b border-cygnusa-border/60 pb-4 mb-2">
        <h3 className="text-xl font-bold font-heading text-cygnusa-void">
          Schedule a Technology Consultation
        </h3>
        <p className="text-xs text-cygnusa-mist mt-1">
          Tell us about your systems, goals, or upcoming project.
        </p>
      </div>

      {serverError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Grid: Full Name & Business Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. John Doe"
            {...register('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all"
          />
          {errors.fullName && (
            <span className="text-xs text-red-600 mt-1 block">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
          >
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. john@company.com"
            {...register('email')}
            aria-invalid={Boolean(errors.email)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all"
          />
          {errors.email && (
            <span className="text-xs text-red-600 mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      {/* Grid: Phone Number & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91-98840 81174"
            {...register('phone')}
            aria-invalid={Boolean(errors.phone)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all"
          />
          {errors.phone && (
            <span className="text-xs text-red-600 mt-1 block">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            placeholder="e.g. Acme Enterprise"
            {...register('company')}
            aria-invalid={Boolean(errors.company)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all"
          />
          {errors.company && (
            <span className="text-xs text-red-600 mt-1 block">
              {errors.company.message}
            </span>
          )}
        </div>
      </div>

      {/* Service Interested In */}
      <div>
        <label
          htmlFor="service"
          className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
        >
          Service of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          {...register('service')}
          aria-invalid={Boolean(errors.service)}
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all text-cygnusa-void"
        >
          <option value="">Select a capability...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Strategic IT Inquiry">
            General Strategic IT Consulting
          </option>
        </select>
        {errors.service && (
          <span className="text-xs text-red-600 mt-1 block">
            {errors.service.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-cygnusa-void mb-1.5"
        >
          Project Details / Challenges <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly describe your technology requirements, current tech stack, or business goals..."
          {...register('message')}
          aria-invalid={Boolean(errors.message)}
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-cygnusa-border rounded-[4px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cygnusa-sky focus:border-transparent transition-all resize-none"
        ></textarea>
        {errors.message && (
          <span className="text-xs text-red-600 mt-1 block">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full font-semibold shadow-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting Consultation Request...
            </span>
          ) : (
            'Submit Consultation Request'
          )}
        </Button>
      </div>

      <p className="text-[11px] text-center text-cygnusa-mist">
        We respect your privacy. Non-Disclosure Agreements (NDAs) available prior to technical discussions.
      </p>
    </form>
  );
};
