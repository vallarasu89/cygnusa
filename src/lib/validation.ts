import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must not exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid business email address.' }),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number.' })
    .max(20, { message: 'Phone number is too long.' }),
  company: z
    .string()
    .min(2, { message: 'Company name is required.' }),
  service: z
    .string()
    .min(1, { message: 'Please select a service of interest.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
