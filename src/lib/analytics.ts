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

// Enhanced portfolio interaction tracking
export const trackPortfolioInteraction = {
  // Project interactions
  projectClick: (projectName: string, action: 'github' | 'demo' | 'view') => {
    trackEvent('click', 'project', `${action}_${projectName}`, undefined);
  },
  
  projectView: (projectName: string) => {
    trackEvent('view', 'project', projectName, undefined);
  },
  
  // Contact form interactions
  contactFormSubmit: () => {
    trackEvent('submit', 'form', 'contact', undefined);
  },
  
  contactFormStart: () => {
    trackEvent('begin_checkout', 'form', 'contact', undefined);
  },
  
  // Social media and external links
  socialMediaClick: (platform: string, url: string) => {
    trackEvent('click', 'social', platform, undefined);
  },
  
  externalLinkClick: (linkType: string, url: string) => {
    trackEvent('click', 'external_link', linkType, undefined);
  },
  
  // Resume and file downloads
  resumeDownload: () => {
    trackEvent('download', 'file', 'resume', undefined);
  },
  
  // Theme and UI interactions
  themeToggle: (newTheme: string) => {
    trackEvent('click', 'ui', `theme_${newTheme}`, undefined);
  },
  
  // Navigation tracking
  navigation: (page: string, fromPage?: string) => {
    trackEvent('click', 'navigation', `${fromPage || 'unknown'}_to_${page}`, undefined);
  },
  
  // CTA button clicks
  ctaClick: (ctaType: string, location: string) => {
    trackEvent('click', 'cta', `${ctaType}_${location}`, undefined);
  },
  
  // Skills and technology interactions
  skillHover: (skill: string) => {
    trackEvent('hover', 'skill', skill, undefined);
  },
  
  // Email and phone interactions
  emailClick: (context: string) => {
    trackEvent('click', 'contact', `email_${context}`, undefined);
  },
  
  phoneClick: (context: string) => {
    trackEvent('click', 'contact', `phone_${context}`, undefined);
  },
  
  linkedinClick: () => {
    trackEvent('click', 'social', 'linkedin', undefined);
  },
  
  // Scroll and engagement tracking
  scrollDepth: (depth: number) => {
    trackEvent('scroll', 'engagement', `depth_${depth}`, depth);
  },
  
  timeOnPage: (page: string, duration: number) => {
    trackEvent('timing_complete', 'engagement', page, Math.round(duration / 1000));
  },
  
  // Form field interactions
  formFieldFocus: (fieldName: string, formType: string) => {
    trackEvent('focus', 'form', `${formType}_${fieldName}`, undefined);
  },
  
  formFieldBlur: (fieldName: string, formType: string) => {
    trackEvent('blur', 'form', `${formType}_${fieldName}`, undefined);
  }
};

// Enhanced tracking for specific components
export const trackProjectInteractions = {
  // Track when user views project details
  projectCardView: (projectName: string, technologies: string[]) => {
    trackEvent('view', 'project_card', projectName, undefined);
    // Track technologies for insights
    technologies.forEach(tech => {
      trackEvent('view', 'technology', tech, undefined);
    });
  },
  
  // Track project button clicks with more context
  projectButtonClick: (projectName: string, buttonType: 'github' | 'demo', projectId: number) => {
    trackEvent('click', 'project_button', `${buttonType}_${projectName}`, projectId);
  }
};

// Social media tracking
export const trackSocialMedia = {
  linkedin: () => trackPortfolioInteraction.linkedinClick(),
  github: (context: string) => trackEvent('click', 'social', `github_${context}`, undefined),
  email: (context: string) => trackPortfolioInteraction.emailClick(context),
  phone: (context: string) => trackPortfolioInteraction.phoneClick(context)
};

// Form tracking
export const trackFormInteractions = {
  fieldFocus: (fieldName: string) => trackPortfolioInteraction.formFieldFocus(fieldName, 'contact'),
  fieldBlur: (fieldName: string) => trackPortfolioInteraction.formFieldBlur(fieldName, 'contact'),
  formStart: () => trackPortfolioInteraction.contactFormStart(),
  formSubmit: () => trackPortfolioInteraction.contactFormSubmit()
};

// Navigation tracking
export const trackNavigation = {
  pageView: (page: string) => trackPortfolioInteraction.navigation(page),
  ctaClick: (ctaType: string, location: string) => trackPortfolioInteraction.ctaClick(ctaType, location),
  scrollToSection: (section: string) => trackEvent('scroll', 'navigation', `to_${section}`, undefined)
};
