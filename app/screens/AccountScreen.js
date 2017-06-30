import React, { Component } from 'react';
import { View,Text } from 'react-native';
import FormTextField from '../components/FormTextField';
import FullBackImage from '../components/FullBackImage';
import UserLogin from '../containers/UserLogin';
import Styles from './Styles/AccountScreen';
import Images from '../themes/Images';

class AccountScreen extends Component {
   
    render() {
        return (
            <View style={Styles.view}>
                <FullBackImage
                    viewStyle={Styles.fullView}
                    imageStyle={Styles.imageStyle}
                    source={Images.accountBackground}>
                    <UserLogin navigation={this.props.navigation} />
                </FullBackImage>
            </View >
        );
    }
}

export default AccountScreen;