import { mauve, purple, red } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      ...purple,
      ...mauve,
      ...red,
    },
    space: {
      xss: '4px',
      xs: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xll: '40px',
    },
    fontSizes: {
      xll: '2.5rem',
      xl: '2rem',
      lg: '1.75rem',
      md: '1.5rem',
      xs: '1.25rem',
      xss: '1rem',
      xsss: '0.8rem',
    },
    fonts: {
      untitled: 'Roboto, sans-serif',
      mono: 'Roboto Mono, monospace',
    },
    fontWeights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      xss: '1.25rem',
      xs: '2.5rem',
      md: '5rem',
      lg: '10rem',
      xl: '20rem',
      xxl: '25rem',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      xss: '4px',
      xs: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xll: '40px',
    },
    shadows: {
      xxs: '0 1px 3px  rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      xs: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      md: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      lg: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    zIndices: {},
    transitions: {},
  },
  utils: {
    centered: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
  media: {
    xs: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});
