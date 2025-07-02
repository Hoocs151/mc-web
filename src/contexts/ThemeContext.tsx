import { createContext, useContext, ReactNode } from 'react';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textSecondary: string;
  surface: string;
  border: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
  transitions: {
    default: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  blur: {
    background: string;
  };
}

// Emotion theme declaration
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textSecondary: string;
      surface: string;
      border: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    transitions: {
      default: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    blur: {
      background: string;
    };
  }
}

const theme: Theme = {
  colors: {
    primary: '#6B0197',
    secondary: '#2D0157',
    background: '#000000',
    text: '#FFFFFF',
    textSecondary: '#E0E0E0',
    surface: '#1a1a1a',
    border: 'rgba(107, 1, 151, 0.3)',
  },
  fonts: {
    heading: '"Minecraft", sans-serif',
    body: '"Roboto", sans-serif',
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
  blur: {
    background: '8px',
  },
};

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};