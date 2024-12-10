import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bike } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

const deliverySignupSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  document: z.string().min(11, 'Document number must be at least 11 digits'),
  vehicle: z.enum(['bicycle', 'motorcycle', 'car']),
  terms: z.boolean().refine((val) => val, 'You must accept the terms'),
});

type DeliverySignupForm = z.infer<typeof deliverySignupSchema>;

export function DeliveryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<DeliverySignupForm>({
    resolver: zodResolver(deliverySignupSchema),
  });

  const onSubmit = (data: DeliverySignupForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
            <Bike className="h-8 w-8 text-orange-500 dark:text-orange-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Become a Delivery Partner</h1>
            <p className="text-gray-600 dark:text-gray-300">Start earning R$3 per delivery</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            label="Full Name"
            {...register('fullName')}
            error={errors.fullName?.message}
            placeholder="Enter your full name"
          />

          <FormInput
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="Enter your email"
          />

          <FormInput
            label="Phone Number"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="Enter your phone number"
          />

          <FormInput
            label="Document Number (CPF)"
            {...register('document')}
            error={errors.document?.message}
            placeholder="Enter your CPF"
          />

          <FormSelect
            label="Vehicle Type"
            {...register('vehicle')}
            error={errors.vehicle?.message}
            options={[
              { value: 'bicycle', label: 'Bicycle' },
              { value: 'motorcycle', label: 'Motorcycle' },
              { value: 'car', label: 'Car' },
            ]}
          />

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <label className="flex items-center space-x-3">
              <input
                {...register('terms')}
                type="checkbox"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the terms and conditions
              </span>
            </label>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Sign Up as Delivery Partner
          </button>
        </form>
      </div>
    </div>
  );
}