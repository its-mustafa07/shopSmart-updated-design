import {createContext} from 'react';
import {Platform} from 'react-native';

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

  // boxShadow: string;
  errorPrimary: string;

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

  errorPrimary: '#FF4C4C',
  // boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)', // This was your original text color; adjust if necessary

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
  errorPrimary: '#FF4C4C',
  // boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)',

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
  errorPrimary: '#FF4C4C',
  text: '#FFFFFF', // Adjusted to white for better visibility
  // boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.8730)', // adjusted the opacity value to a valid range (0-1)

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

  errorPrimary: '#FF4C4C',
  text: '#FFFFFF', // Adjusted to white based on your text color specifications
  // boxShadow: '0 4px 25px 0 rgba(87, 87, 87, 0.30)', // Note: This won't directly work in React Native

  white: '#FFFFFF',
  listSecondary: '#2C3742',
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
