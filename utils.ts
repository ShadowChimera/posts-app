import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffle = (array: Array<any>) => {
  return [...array].sort(() => Math.random() - 0.5);
};
