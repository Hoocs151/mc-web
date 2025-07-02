import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider, ThemeProvider, useTheme } from './contexts';
import {
  ErrorBoundary,
  Navigation,
  Footer,
  LoadingScreen,
  ScrollToTop,
  SEOHead,
  Hero,
  ServerInfo,
  Rules,
  Voting,
  Gallery
} from './components';
import '@fontsource/roboto';
import './app.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <EmotionThemeProvider theme={theme}>
      <ToastProvider>
        <SEOHead />
        <div className="app">
          {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

          {!isLoading && (
            <>
              <Navigation />
              <div id="home">
                <Hero />
              </div>
              <div id="server-info">
                <ServerInfo />
              </div>
              <div id="gallery">
                <Gallery />
              </div>
              <div id="rules">
                <Rules />
              </div>
              <div id="voting">
                <Voting />
              </div>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </div>
      </ToastProvider>
    </EmotionThemeProvider>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider>
            <AppContent />
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;