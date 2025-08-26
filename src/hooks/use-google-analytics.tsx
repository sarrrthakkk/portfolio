import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { config } from "@/lib/config";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait a bit for the page title to update
    const timer = setTimeout(() => {
      // Initialize Google Analytics with updated page title
      if (typeof window !== 'undefined' && window.gtag) {
        const currentTitle = document.title;
        const currentPath = location.pathname + location.search;
        
        console.log(`📊 GA Tracking: ${currentPath} - "${currentTitle}"`);
        
        window.gtag('config', config.analytics.googleAnalyticsId, {
          page_path: currentPath,
          page_title: currentTitle,
          page_location: window.location.href,
        });
      }
    }, 100); // Small delay to ensure title is updated

    return () => clearTimeout(timer);
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
      const pageTitle = title || document.title;
      console.log(`📊 GA Page View: ${path} - "${pageTitle}"`);
      
      window.gtag('config', config.analytics.googleAnalyticsId, {
        page_path: path,
        page_title: pageTitle,
        page_location: window.location.href,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
  };
};
