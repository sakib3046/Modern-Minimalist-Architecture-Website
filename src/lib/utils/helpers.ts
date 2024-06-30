import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function zeroPad(num: number, places: number) {
  return String(num).padStart(places, '0');
}
