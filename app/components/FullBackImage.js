import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Styles from './Styles/FullBackImage';

class FullBackImage extends Component {
    render() {
        return (
            <View style={this.props.viewStyle} >
                <Image source={this.props.source}
                    resizeMode='cover'
                    style={[Styles.imageStyle, this.props.imageStyle]}>
                    {this.props.children}
                </Image>
            </View >

        );
    }
}

export default FullBackImage;