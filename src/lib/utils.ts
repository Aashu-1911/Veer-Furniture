import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to element with an offset for the fixed navbar
 */
export function scrollToSection(sectionId: string) {
  const cleanId = sectionId.replace('#', '');
  const element = document.getElementById(cleanId);
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

