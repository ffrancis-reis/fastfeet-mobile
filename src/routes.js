import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    SignUp,
  })
);
