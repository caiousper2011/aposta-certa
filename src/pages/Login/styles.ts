import { styled } from '../../styles/theme';

export const Background = styled('div', {
  width: '100vw',
  height: '100vh',
  centered: '',
  backgroundImage:
    'linear-gradient(to right bottom, #2b0e44, #3d185d, #502377, #642e93, #793aaf)',
});

export const LoginBox = styled('div', {
  width: '$xxl',
  height: '$xl',
  borderRadius: '$xss',
  boxShadow: '$xs',
  backgroundColor: '$purple4',
  marginRight: '$xss',
  MarginLeft: '$xss',
  transform: 'translateY(2rem)',
  padding: '$lg',
});

export const LoginNavBar = styled('header', {
  width: '100vw',
  height: '$md',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '$lg',
  paddingRight: '$lg',
  '@md': {
    justifyContent: 'flex-start',
  },
});
