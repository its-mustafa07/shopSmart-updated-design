import {createContext} from 'react';

type ThemeType = {
  background: string;
  bgcolor1: string;
  bgcolor2: string;
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  accent: string;
  list: string;
  input: string;
  text: string;
  gradientStart: string;
  gradientEnd: string;
  gradient: GradientType;
  boxShadow: string;
};

type GradientType = {
  start: {x: number; y: number};
  end: {x: number; y: number};
  locations: number[];
  colors: string[];
};

export const lightPink: ThemeType = {
  background: 'radial-gradient(50% 139.77% at 100% 50%, #FFEDE3 0%, #FFF 100%)',
  gradientStart: '#FFEDE3',
  gradientEnd: '#FFFFFF',
  bgcolor1: '#FFEDE3',
  bgcolor2: '#FFFFFF',
  primary: '#FF8A71',
  secondary: '#FFD9C3',
  textPrimary: '#2E2E2E',
  textSecondary: 'rgba(46, 46, 46, 0.9)', // 90% opacity
  textAccent: 'rgba(46, 46, 46, 0.7)', // 70% opacity
  accent: '#040325',
  list: '#FFFFFF',
  input: '#FFFFFF',
  text: '#000',
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)', // This was your original text color; adjust if necessary
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#FFF', '#FFEDE2', '#FFF'],
  },
};

// ... the rest of your theme definitions remain unchanged

export const lightBlue: ThemeType = {
  gradientStart: '#FFEDE3',
  gradientEnd: '#FFFFFF',
  background: 'green',
  bgcolor1: '#FFEDE3',
  bgcolor2: '#FFFFFF',
  primary: '#55ACEE',
  secondary: '#C2E2FF',
  textPrimary: '#2E2E2E',
  textSecondary: 'rgba(46, 46, 46, 0.9)', // 90% opacity
  textAccent: 'rgba(46, 46, 46, 0.7)', // 70% opacity
  accent: '#040325',
  list: '#FFFFFF',
  input: '#FFFFFF',
  text: '#000',
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)', //
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#FFF', '#C2E2FF', '#FFF'],
  },
};

export const darkPink: ThemeType = {
  gradientStart: '#00294F',
  gradientEnd: '#333333',
  background: 'radial-gradient(circle, #401800, #333333)',
  bgcolor1: '#401800',
  bgcolor2: '#333333',
  primary: '#FF9F87',
  secondary: '#865446',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.9)', // 90% opacity
  textAccent: 'rgba(255, 255, 255, 0.7)', // 70% opacity
  accent: '#040325',
  list: 'rgba(0, 0, 0, 0.4)', // 40% opacity
  input: '#000000',
  text: '#FFFFFF', // Adjusted to white for better visibility
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.8730)', // adjusted the opacity value to a valid range (0-1)
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#333', '#401800', '#333'],
  },
};

export const darkBlue: ThemeType = {
  gradientStart: '#00294F',
  gradientEnd: '#333333',
  background: 'radial-gradient(circle, #00294F, #333333)',
  bgcolor1: '#00294F',
  bgcolor2: '#333333',
  primary: '#55ACEE',
  secondary: '#004485',
  textPrimary: '#FFFFFF', // 100% opacity
  textSecondary: 'rgba(255, 255, 255, 0.9)', // 90% opacity
  textAccent: 'rgba(255, 255, 255, 0.7)', // 70% opacity
  accent: '#040325',
  list: 'rgba(0, 0, 0, 0.4)', // 40% opacity
  input: '#000000',
  text: '#FFF', // Adjusted to white based on your text color specifications
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)', // Note: This won't directly work in React Native
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#333', '#00294F', '#333'], // These are your original gradient colors, adjust if needed
  },
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightBlue, // default value
  setTheme: () => {},
});
