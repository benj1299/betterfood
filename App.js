import React from 'react';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import TabNavigation from './Navigation/Navigation'
import { Provider} from 'react-redux'
import Store from './Store/ConfigureStore'
export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
      <TabNavigation/>
       </PersistGate>
</Provider>
    );
  }
}
