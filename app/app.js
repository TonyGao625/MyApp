import React, { Component } from 'react';
import AppNavigation from './navigation/AppNavigation';
import { ScrollView, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ScrollView>
                    <View style={{ height: Dimensions.get('window').height - 24 }}>
                        <AppNavigation />
                    </View>
                </ScrollView>
            </Provider>
        );
    }
}

export default App;