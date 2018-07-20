import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/reducers/reducer'

import Home from './src/components/Home';

const store = createStore(reducer);
console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <View style={styles.container}>
            <Route exact path='/' component={Home} />
          </View>
        </Provider>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8D5B9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
