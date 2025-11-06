import React from 'react';
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = ''
}: InputProps) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`} />;
}