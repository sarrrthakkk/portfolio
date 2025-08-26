import { config } from './config';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', config.analytics.googleAnalyticsId, {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

// Track portfolio interactions
export const trackPortfolioInteraction = {
  // Project clicks
  projectClick: (projectName: string) => {
    trackEvent('click', 'portfolio', 'project', undefined);
  },
  
  // Contact form submissions
  contactFormSubmit: () => {
    trackEvent('submit', 'form', 'contact', undefined);
  },
  
  // Social media clicks
  socialMediaClick: (platform: string) => {
    trackEvent('click', 'social', platform, undefined);
  },
  
  // Download resume
  resumeDownload: () => {
    trackEvent('download', 'file', 'resume', undefined);
  },
  
  // Theme toggle
  themeToggle: (theme: string) => {
    trackEvent('click', 'ui', 'theme_toggle', undefined);
  },
  
  // Navigation
  navigation: (page: string) => {
    trackEvent('click', 'navigation', page, undefined);
  }
};
