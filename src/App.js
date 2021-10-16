import { Fragment } from 'react';
import { Login } from './pages/Login';
import { globalStyles } from './styles/global';

function App() {
  globalStyles();

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;
