import React from 'react';
import { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          {label}
        </label>
        <input
          ref={ref}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);