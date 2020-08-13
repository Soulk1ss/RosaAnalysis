/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './router';
//import App from './Page/suggestion/step1'
//import App from './Page/showResult'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App );
