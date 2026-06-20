import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fmtMoney = (n: number | string | null | undefined) =>
  `$${Number(n || 0).toFixed(Number.isInteger(Number(n)) ? 0 : 2)}`;
