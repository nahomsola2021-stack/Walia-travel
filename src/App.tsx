import React, { useState, useEffect, useCallback } from 'react';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import WhatsAppWidget from './components/WhatsAppWidget'; // Added WhatsApp Widget import

// Pages
import HomePage from './pages/HomePage'; 
import { AboutPage } from './pages/AboutPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ToursPage } from './pages/ToursPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { BlogEventsPage } from './pages/BlogEventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Types & Data
import { Tour, Destination } from './types';
import { ExtendedTour, TOURS_DATA } from './data/tours';
import { DESTINATIONS_DATA } from './data/destinations';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [selectedTour, setSelectedTour] = useState<Tour | ExtendedTour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Global Inquiry Modal State
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryTourTitle, setInquiryTourTitle] = useState<string | undefined>(undefined);

  // Parse route safely wrapped in useCallback for dependency arrays
  const parseAndSetRoute = useCallback((path: string) => {
    setCurrentPath(path);

    if (path.startsWith('/tours/')) {
      const slug = path.replace('/tours/', '');
      const found = TOURS_DATA.find((t) => t.slug === slug || t.id === slug);
      if (found) {
        setSelectedTour(found);
        return;
      }
    }

    if (path.startsWith('/destinations/')) {
      const slug = path.replace('/destinations/', '');
      const found = DESTINATIONS_DATA.find((d) => d.slug === slug || d.id === slug);
      if (found) {
        setSelectedDestination(found);
        return;
      }
    }
  }, []);

  // Synchronize with window.location on load and popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      parseAndSetRoute(path);
    };

    const initialPath = window.location.pathname || '/';
    parseAndSetRoute(initialPath);

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseAndSetRoute]);

  // Unified navigation handler
  const navigateTo = useCallback((path: string) => {
    // Prevent duplicate history entries
    if (window.location.pathname !== path) {
      if (window.history.pushState) {
        window.history.pushState({}, '', path);
      }
      parseAndSetRoute(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [parseAndSetRoute]);

  // Selection Handlers
  const handleSelectTour = useCallback((tour: Tour) => {
    setSelectedTour(tour);
    navigateTo(`/tours/${tour.slug}`);
  }, [navigateTo]);

  const handleSelectDestination = useCallback((dest: Destination) => {
    setSelectedDestination(dest);
    navigateTo(`/destinations/${dest.slug}`);
  }, [navigateTo]);

  // Modal Handlers
  const handleOpenInquiry = useCallback((tourTitle?: string) => {
    setInquiryTourTitle(tourTitle);
    setInquiryModalOpen(true);
  }, []);

  const handleCloseInquiry = useCallback(() => {
    setInquiryModalOpen(false);
    setInquiryTourTitle(undefined);
  }, []);

  // Centralized Route Renderer
  const renderCurrentView = () => {
    // Dynamic Routes
    if (currentPath.startsWith('/tours/') && selectedTour) {
      return (
        <TourDetailPage
          tour={selectedTour}
          onBack={() => navigateTo('/tours')}
          onOpenInquiry={(name) => handleOpenInquiry(name)}
        />
      );
    }

    if (currentPath.startsWith('/destinations/') && selectedDestination) {
      return (
        <DestinationDetailPage
          destination={selectedDestination}
          onBack={() => navigateTo('/destinations')}
          onSelectTour={handleSelectTour}
          onOpenInquiry={(name) => handleOpenInquiry(name)}
        />
      );
    }

    // Static Routes
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectTour={handleSelectTour}
            onSelectDestination={handleSelectDestination}
            onOpenInquiry={handleOpenInquiry}
          />
        );
      case '/about':
        return <AboutPage onOpenInquiry={handleOpenInquiry} onNavigate={navigateTo} />;
      case '/destinations':
        return <DestinationsPage onSelectDestination={handleSelectDestination} />;
      case '/tours':
        return (
          <ToursPage
            onSelectTour={handleSelectTour}
            onOpenInquiry={(name) => handleOpenInquiry(name)}
          />
        );
      case '/blog-events':
        return <BlogEventsPage onOpenInquiry={handleOpenInquiry} />;
      case '/gallery':
        return <GalleryPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // 404 Fallback
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <h1 className="text-4xl font-display font-bold text-walia-earth mb-4">Page Not Found</h1>
            <p className="text-walia-ink-soft mb-8">The route you are looking for does not exist.</p>
            <button 
              onClick={() => navigateTo('/')}
              className="px-6 py-3 rounded-full bg-walia-earth text-white font-medium hover:bg-walia-charcoal transition-colors"
            >
              Return Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#251810] selection:bg-[#FFCBA6] selection:text-[#251810]">
      {/* Universal Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Area */}
      <main className="flex-1 w-full animate-fade-in">
        {renderCurrentView()}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} onOpenInquiry={() => handleOpenInquiry()} />

      {/* Universal Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        preselectedTourTitle={inquiryTourTitle}
      />

      {/* Universal Global WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}