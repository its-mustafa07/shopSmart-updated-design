import {createContext} from 'react';

type ThemeType = {
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
  bgcolor1: '#FFEDE3',
  bgcolor2: '#FFFFFF',
  primary: '#FF8A71',
  secondary: '#FFD9C3',
  textPrimary: '#000000',
  textSecondary: 'rgba(46, 46, 46, 0.9)',
  textAccent: 'rgba(46, 46, 46, 0.7)',
  accent: '#040325',
  list: '#FFFFFF',
  input: '#FFFFFF',
  text: '#000',
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)',
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#FFF', '#FFEDE2', '#FFF'],
  },
};

export const lightBlue: ThemeType = {
  bgcolor1: '#C2E2FF',
  bgcolor2: '#FFFFFF',
  primary: '#55ACEE',
  secondary: '#C2E2FF',
  textPrimary: '#000000',
  textSecondary: 'rgba(46, 46, 46, 0.9)',
  textAccent: 'rgba(46, 46, 46, 0.7)',
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
  bgcolor1: '#401800',
  bgcolor2: '#333333',
  primary: '#FF9F87',
  secondary: '#865446',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.9)',
  textAccent: 'rgba(255, 255, 255, 0.7)',
  accent: '#040325',
  list: 'rgba(0, 0, 0, 0.4)',
  input: '#000000',
  text: '#FFFFFF',
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.8730)',
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#333', '#401800', '#333'],
  },
};

export const darkBlue: ThemeType = {
  bgcolor1: '#00294F',
  bgcolor2: '#333333',
  primary: '#55ACEE',
  secondary: '#004485',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.9)',
  textAccent: 'rgba(255, 255, 255, 0.7)',
  accent: '#040325',
  list: 'rgba(0, 0, 0, 0.4)',
  input: '#000000',
  text: '#FFF',
  boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)',
  gradient: {
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
    locations: [0, 0.5, 1],
    colors: ['#333', '#00294F', '#333'],
  },
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightPink,
  setTheme: () => {},
});
