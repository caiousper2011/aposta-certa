import { globalCss } from './theme';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$mauve1',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$untitled',
    fontWeight: '$medium',
  },
  'h1, h2, h3, h4, h5, h6, p': {
    color: '$mauve12',
  },
  h1: {
    fontSize: '$xll',
  },
  h2: {
    fontSize: '$xl',
  },
  h3: {
    fontSize: '$lg',
  },
  h4: {
    fontSize: '$md',
  },
  h5: {
    fontSize: '$xs',
  },
  h6: {
    fontSize: '$xss',
  },
  p: {
    fontSize: '$xsss',
    fontFamily: '$mono',
  },
});
