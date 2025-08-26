import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { config } from '@/lib/config';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.analytics.googleAnalyticsId, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (path: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.analytics.googleAnalyticsId, {
        page_path: path,
        page_title: title || document.title,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
  };
};
