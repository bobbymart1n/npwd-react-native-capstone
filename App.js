import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import rootReducer from './src/reducers/index';
import root from './src/sagas/sagas';

import Home from './src/components/Home';
import PhoneNumberDetails from './src/components/PhoneNumberDetails';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
console.log(store.getState());

sagaMiddleware.run(root);

class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-reg': require('./assets/fonts/OpenSansRegular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSansBold.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSansLight.ttf'),
      'open-sans-extra-bold': require('./assets/fonts/OpenSansExtraBold.ttf'),
      'open-sans-semi-bold': require('./assets/fonts/OpenSansSemibold.ttf'),
      'raleway-reg': require('./assets/fonts/RalewayRegular.ttf'),
      'raleway-bold': require('./assets/fonts/RalewayBold.ttf'),
      'raleway-extra-bold': require('./assets/fonts/RalewayExtraBold.ttf'),
      'raleway-black': require('./assets/fonts/RalewayBlack.ttf'),
      'raleway-medium': require('./assets/fonts/RalewayMedium.ttf'),
      'raleway-semi-bold': require('./assets/fonts/RalewaySemiBold.ttf'),
      'raleway-light': require('./assets/fonts/RalewayLight.ttf'),
      'raleway-extra-light': require('./assets/fonts/RalewayExtraLight.ttf'),
      'raleway-thin': require('./assets/fonts/RalewayThin.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded &&
      <Router>
        <Provider store={store}>
          <Scene key='root'>
            <Scene key='home' component={Home} title='Home' initial={true} />
            <Scene key='details' component={PhoneNumberDetails} title='Number Details '/>
          </Scene>
        </Provider>
      </Router>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
