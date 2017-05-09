import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAGTQzP11idO8canizr-O0leGRhmi1PNp8',
            authDomain: 'manager-2c287.firebaseapp.com',
            databaseURL: 'https://manager-2c287.firebaseio.com',
            projectId: 'manager-2c287',
            storageBucket: 'manager-2c287.appspot.com',
            messagingSenderId: '289408547901'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;