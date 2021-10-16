import { Background, LoginBox, LoginNavBar } from './styles';
import logoImg from '../../assets/logo.png';
interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <Background>
      <LoginNavBar>
        <img src={logoImg} alt='Logotipo Aposta certa' />
      </LoginNavBar>
      <LoginBox>
        <h4>Login de usuário</h4>
      </LoginBox>
    </Background>
  );
};
