import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { Poppins } from 'next/font/google'

export const poppins = Poppins({ subsets: ["devanagari"], weight: ["100", "500"] }) 