import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './src/reducers/reducer'
import watcherTestSaga from './src/sagas/sagas';

import Home from './src/components/Home';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
console.log(store.getState());

sagaMiddleware.run(watcherTestSaga);

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
