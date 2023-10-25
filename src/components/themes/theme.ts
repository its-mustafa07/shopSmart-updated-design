import {createContext} from 'react';
import {Platform} from 'react-native';

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
  white: string;
  listSecondary: string;
  disabledButton: string;
  boxShadow: boxShadowType;
};

type boxShadowType = {
  shadowColor?: string;
  shadowOffset?: {width: number; height: number};
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
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
  textPrimary: '#2E2E2E',
  textSecondary: 'rgba(46, 46, 46, 0.9)',
  textAccent: 'rgba(46, 46, 46, 0.7)',
  accent: '#040325',
  list: '#FFFFFF',
  input: '#FFFFFF',
  text: '#000',
  white: '#FFFFFF',
  listSecondary: '#FFF1EA',
  disabledButton: '#C8D5E0',
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.30)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 25,
      },
      android: {
        elevation: 5,
      },
    }),
  },

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
  textPrimary: '#2E2E2E',
  textSecondary: 'rgba(46, 46, 46, 0.9)',
  textAccent: 'rgba(46, 46, 46, 0.7)',
  accent: '#040325',
  list: '#FFFFFF',
  input: '#FFFFFF',
  text: '#000',
  white: '#FFFFFF',
  listSecondary: '#C8E4FF',
  disabledButton: '#C8D5E0',
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.30)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 25,
      },
      android: {
        elevation: 5,
      },
    }),
  },
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
  white: '#FFFFFF',
  listSecondary: '#333333',
  disabledButton: '#3C3C3C',
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(87, 87, 87, 0.30)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 25,
      },
      android: {
        elevation: 5,
      },
    }),
  },
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
  white: '#FFFFFF',
  listSecondary: '#26303A',
  disabledButton: '#3C3C3C',
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(87, 87, 87, 0.30)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 25,
      },
      android: {
        elevation: 5,
      },
    }),
  },
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

export const ThemeContext = createContext(<ThemeContextType>{
  theme: lightPink,
  setTheme: () => {},
});
