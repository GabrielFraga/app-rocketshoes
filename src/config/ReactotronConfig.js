import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    // .configure({ host: '192.168.1.12' })
    .configure({ host: '192.168.56.101' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
